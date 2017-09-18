import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { slide as Menu } from 'react-burger-menu';
import _ from 'lodash';

import { colors, fonts, isDesktop } from '../assets/styles/Common';
import Collapsible from './Collapsible';
import Dropdown from './DropDown';
import CollapsibleItem from './CollapsibleItem';
import Explorer from '../static/explorer';
import { sendMessage } from '../actions/ApiAiActions';

const styles = StyleSheet.create({
  menuTitle: {
    ...fonts.body,
    color: colors.grey,
    background: colors.midBlue,
    fontSize: '1.25rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem ',
  },
  menuContent: {
    height: 0,
    overflow: 'auto',
    flex: 1,
    display: 'block',
  },
  menuItem: {
    color: colors.grey,
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '1rem 0',

    ':hover': {
      color: colors.blue,
    }
  },
});

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '26px'
  },
  bmOverlay: {
    width: '110%',
  },
  bmMenuWrap: {
    left: 0,
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    cursor: 'pointer',
    background: '#bdc3c7'
  },
  bmMenu: {
    background: colors.grey,
    fontSize: '1.15rem',
    overflow: 'auto',
  },
  bmMenuItem: {
    color: 'red',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
};

const ALL_TAG = 'All';
const DEFAULT_QUERY_SIZE = 5;

class ConversationExplorer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: isDesktop(),
      selectedTag: null,
    };
  }

  handleClickSection = (message) => {
    this.setState({ isOpen: isDesktop() });
    sendMessage(message);
  }

  handleSelectTag = (tag) => {
    this.setState({ selectedTag: tag });
  }

  isMenuOpen = ({ isOpen }) => {
    this.setState({ isOpen });
  }

  onSectionOpen = (index) => {
    const { openSectionIndex } = this.state;
    const openIndex = openSectionIndex === index ? null : index;
    this.setState({ openSectionIndex: openIndex, selectedTag: null });
  }

  renderExplorerSections = () => {
    const { openSectionIndex, selectedTag } = this.state;

    return Explorer.map(({ title, tags, queries }, sectionIndex) => {
      let filteredQueries = queries;
      let allTags;
      if (tags) {
        allTags = [ALL_TAG].concat(tags);
      }

      if (selectedTag !== ALL_TAG) {
        if (selectedTag) {
          filteredQueries = queries.filter(
            query => !query.tags || query.tags.includes(selectedTag)
          );
        } else {
          filteredQueries = _.sampleSize(filteredQueries, DEFAULT_QUERY_SIZE);
        }
      }

      return (
        <Collapsible
          key={`section-${sectionIndex}`}
          title={title}
          index={sectionIndex}
          isOpen={sectionIndex === openSectionIndex }
          onSectionOpen={this.onSectionOpen}
        >
          {allTags && (
            <Dropdown
              placeholder="Filter by Topic"
              onSelect={this.handleSelectTag}
              selectedValue={selectedTag}
              options={allTags}
            />
          )}
          {
            filteredQueries.map((query, queryIndex) => (
              <CollapsibleItem
                key={`section-${sectionIndex}-item-${queryIndex}`}
                onClick={this.handleClickSection}
                text={query.text}
              />
            ))
          }
        </Collapsible>
      );
    })
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Menu
        noOverlay={isDesktop()}
        isOpen={isOpen}
        onStateChange={this.isMenuOpen}
        customCrossIcon={false}
        styles={menuStyles}
      >
        <div className={css(styles.menuTitle)}>Conversation Explorer</div>
        <div className={css(styles.menuContent)}>
          {this.renderExplorerSections()}
        </div>
      </Menu>
    )
  }
};

export default ConversationExplorer;
