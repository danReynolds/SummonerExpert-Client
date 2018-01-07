import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { slide as Menu } from 'react-burger-menu';
import Icon from 'react-icons-kit';
import { ic_clear } from 'react-icons-kit/md/ic_clear';

import { colors, fonts, isDesktop, CategoryIcons } from '../assets/styles/Common';
import Collapsible from './Collapsible';
import Option from './Option';
import QueryBuilder from './QueryBuilder';
import CollapsibleItem from './CollapsibleItem';
import Modal from './Modal';
import Explorer from '../static/explorer';
import { sendMessage } from '../actions/ApiAiActions';
import { style } from '../lib/utils';

const styles = StyleSheet.create({
  categorySelector: {
    ...fonts.body,
    color: colors.grey,
    fontSize: '1.25rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem ',

    ':hover': {
      cursor: 'pointer',
      background: colors.midBlue,
    }
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
  closeButton: {
    position: 'absolute',
    right: '1rem',
    top: '24px',
    color: colors.white,
  },
  queryPrompt: {
    cursor: 'pointer',
    colors: colors.white,
    padding: '0.8rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: '0.5rem',
  },
  categoryIcon: {
    height: '1.8rem',
    marginRight: '1rem',
  },
});

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '36px',
    top: '26px'
  },
  bmOverlay: {
    width: '110%',
    background: colors.nightBlue,
  },
  bmMenuWrap: {
    left: 0,
    background: colors.darkBlue,
  },
  bmBurgerBars: {
    background: colors.white,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    cursor: 'pointer',
  },
  bmMenu: {
    fontSize: '1.15rem',
    overflow: 'auto',
    background: 'none',
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

class ConversationExplorer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: isDesktop(),
      isCategoryOpen: false,
      selectedCategory: props.category || Explorer.champion.key,
      modalOpen: false,
    };
  }

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  };

  onCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleClickSection = (message) => {
    this.setState({ isOpen: isDesktop() });
    sendMessage(message);
  }

  handleSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
    this.toggleCategoryOpen();
  }

  handleClosePressed = () => {
    this.setMenuOpen({ isOpen: false });
  }

  setMenuOpen = ({ isOpen }) => {
    this.setState({ isOpen });
  }

  toggleCategoryOpen = () => {
    this.setState({ selectCategoryOpen: !this.state.selectCategoryOpen });
  }

  selectSection = (section) => {
    const { selectedSection } = this.state;
    const openIndex = selectedSection === section ? null : section;
    this.setState({ selectedSection: openIndex });
  }

  renderModal = () => {
    const { modalOpen, selectedCategory, selectedSection } = this.state;
    const sections = Explorer[selectedCategory].sections;
    const section = sections[selectedSection];
    return (
      <div>
        <Modal open={modalOpen} onClose={this.onCloseModal}>
          <QueryBuilder
            selectedCategory={selectedCategory}
            selectedSection={(section || Object.values(sections)[0]).key}
          />
        </Modal>
      </div>
    );
  }

  renderCategoryOptions = () => {
    const { selectedCategory } = this.state;
    return Object.values(Explorer).map((category, index) => (
      <Option
        selected={category.key === selectedCategory}
        value={category.key}
        index={index}
        key={`option-${index}`}
        onClick={this.handleSelectCategory}
      >
        <img className={css(styles.categoryIcon)} src={CategoryIcons[category.key]} alt='logo' />
        {category.title}
      </Option>
    ));
  }

  renderCategorySections = () => {
    const { selectedSection, selectedCategory } = this.state;

    return Object.values(Explorer[selectedCategory].sections).map(({ key, title, tags, queries }, sectionIndex) => (
        <Collapsible
          key={`section-${sectionIndex}`}
          dataKey={key}
          title={title}
          index={sectionIndex}
          isOpen={key === selectedSection }
          onSelect={this.selectSection}
          onEdit={this.toggleModal}
        >
          {
            queries.map((query, queryIndex) => (
              <CollapsibleItem
                index={queryIndex}
                key={`section-${sectionIndex}-item-${queryIndex}`}
                onClick={this.handleClickSection}
                text={query.text}
              />
            ))
          }
        </Collapsible>
    ));
  };

  render() {
    const { isOpen, selectCategoryOpen, selectedCategory } = this.state;
    const desktop = isDesktop();
    const menuStyleOverrides = desktop || isOpen ? (
      { ...menuStyles, bmBurgerButton: { display: 'none' }
    }) : menuStyles;

    return (
      <Menu
        width={desktop ? 300 : '100%'}
        noOverlay={desktop}
        isOpen={isOpen}
        onStateChange={this.setMenuOpen}
        customCrossIcon={false}
        styles={menuStyleOverrides}
      >
        <div onClick={this.toggleCategoryOpen} className={style(styles.categorySelector, 'hvr-fade')}>
          <img className={css(styles.categoryIcon)} src={CategoryIcons[selectedCategory]} alt='logo' />
          Conversation Explorer
        </div>
        <div className={css(styles.menuContent)}>
          {this.renderModal()}
          {selectCategoryOpen ? this.renderCategoryOptions() : this.renderCategorySections()}
        </div>
        {
          isOpen && !desktop && (
            <div className={css(styles.closeButton)} onClick={this.handleClosePressed}>
              <Icon icon={ic_clear} size={32} />
            </div>
          )
        }
      </Menu>
    )
  }
};

export default ConversationExplorer;
