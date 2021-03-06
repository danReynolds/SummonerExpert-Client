import _ from 'lodash';
import React , { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { observer } from 'mobx-react'
import { fadeInLeftBig, fadeInRightBig } from 'react-animations';

import { colors, fonts, breakpoints } from '../assets/styles/Common';
import { MESSAGE_TYPES } from '../stores/MessageStore';
import LogoImage from '../assets/images/summoner-expert.svg';
import Responses from '../static/responses';

const styles = (messageType) => StyleSheet.create({
  messageContainer: {
    animationName: fadeInLeftBig,
    animationDuration: '0.3s',
    display: 'flex',
    alignItems: 'center',
    margin: '2rem 0',
  },
  userMessageContainer: {
    animationName: fadeInRightBig,
    animationDuration: '0.15s',
    flexDirection: 'row-reverse',
  },
  message: {
    ...fonts.body,
    flex: '0 1 auto',
    padding: '1rem',
    borderRadius: '2px',
    position: 'relative',
    wordWrap: 'break-word',
    cursor: messageType === MESSAGE_TYPES.user ? 'pointer' : 'initial',

    [breakpoints.mobile]: {
      maxWidth: '100%',
    },

    [breakpoints.desktop]: {
      maxWidth: '50%',
    },
  },
  botMessage: {
    background: colors.white,
    color: colors.darkGrey,
    marginLeft: '1.5rem',

    ':after': {
      content: '""',
    	position: 'absolute',
    	left: 0,
    	top: '50%',
    	width: 0,
    	height: 0,
    	border: '10px solid transparent',
    	borderLeft: 0,
    	marginTop: '-10px',
    	marginLeft: '-10px',
      borderRightColor: colors.white,
    }
  },
  userMessage: {
    background: colors.blue,
    color: colors.white,
    marginRight: '1.5rem',

    ':after': {
      content: '""',
    	position: 'absolute',
    	right: 0,
    	top: '50%',
    	width: 0,
    	height: 0,
    	border: '10px solid transparent',
    	borderRight: 0,
    	marginTop: '-10px',
    	marginRight: '-10px',
      borderLeftColor: colors.blue,
    }
  },
  image: {
    flex: 'none',
    height: 50,
    width: 50,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: colors.white,
  },
});

@observer
class MessageView extends Component {
  componentDidMount() {
    this.message.scrollIntoView();
  }

  componentDidUpdate() {
    this.message.scrollIntoView();
  }

  handleClick = () => {
    const { onMessageChange, message: { text, type } } = this.props;
    if (type === MESSAGE_TYPES.user){
      onMessageChange(text);
    }
  }

  render() {
    const { message: { text, type }, avatar } = this.props;
    let messageStyle, messageContainerStyle, messageAvatar;
    const currentStyles = styles(type);

    if (type === MESSAGE_TYPES.user) {
      messageContainerStyle = currentStyles.userMessageContainer;
      messageStyle = currentStyles.userMessage;
      messageAvatar = StyleSheet.create({
        avatar: {
          backgroundImage: `url(${avatar})`
        }
      })
    } else {
      messageStyle = currentStyles.botMessage;
      messageAvatar = StyleSheet.create({
        avatar: { backgroundImage: `url(${LogoImage})` }
      });
    }

    return (
      <div className={css(currentStyles.messageContainer, messageContainerStyle)}>
        <div className={css(currentStyles.image, messageAvatar.avatar)} />
        <div
          onClick={this.handleClick}
          ref={(message) => this.message = message }
          className={css(currentStyles.message, messageStyle)}
        >
          {text || _.sample(Responses.loading)}
        </div>
      </div>

    );
  }
};

export default MessageView;
