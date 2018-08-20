import React, { PureComponent } from 'react';
import echarts from 'echarts';
import { StyleSheet, css } from 'aphrodite';
import { getSimilarity } from '../lib/endpoints';
import { fadeIn } from 'react-animations';
import { colors } from '../assets/styles/Common';

const styles = StyleSheet.create({
  similarityContainer: {
    width: '100%',
    height: '40rem',
    border: `4px solid ${colors.gold}`,
    animationName: fadeIn,
    animationDuration: '15s',
    borderRadius: '2px',
    flex: 6,
  },
})

class SimilarityGraph extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      similarities: null,
    };

    this.similarityChart = null;
  }

  componentDidMount() {
    getSimilarity().then(({ data: similarities }) => {
      this.setState({ similarities });
    });
  }

  componentDidUpdate(prevState) {
    if (this.state.similarities !== prevState.similarities) {
      this.updateSimilarityGraph();
    }
  }

  updateSimilarityGraph = () => {
    const { similarities } = this.state;
    if (similarities) {
      this.similarityChart = echarts.init(document.getElementById('similarity'));
      const similarityIds = Object.keys(similarities);
      const nodes = similarityIds.map(similarityId => ({ name: similarityId, symbolSize: 1 }));
      const edges = similarityIds.reduce((acc, similarityId) => {
        return [
          ...acc,
          ...similarities[similarityId].map(targetSimilarityId => {
            const targetSimilarityIdString = targetSimilarityId.toString();
            nodes.find(node => node.name === targetSimilarityIdString).symbolSize += 1;
            return { source: similarityId, target: targetSimilarityIdString };
          }),
        ];
      }, []);
      this.similarityChart.setOption({
       series: [
         {
           label: {
                    emphasis: {
                        position: 'right',
                        show: true
                    }
                },
           name: 'Champion similarities',
           animation: true,
           animationDurationUpdate: 1500,
           animationEasingUpdate: 'quinticInOut',
           layout: 'force',
           type: 'graph',
           roam: true,
           lineStyle: {
                normal: {
                    width: 0.5,
                    curveness: 0.3,
                    opacity: 0.7
                }
           },
           hoverAnimation: true,
           focusNodeAdjacency: true,
           force: {
             repulsion: 200,
             edgeLength: 5,
             gravity: 0.2,
           },
           data: nodes,
           links: edges,
         }
       ]
      });
    }
  }

  render() {
    return (
      <div className={css(styles.similarityContainer)} id='similarity' />
    );
  }
}

export default SimilarityGraph;
