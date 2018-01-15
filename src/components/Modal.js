import React, { Component } from 'react';
import BaseModal from 'react-responsive-modal';

import { colors } from '../assets/styles/Common';

const styles = {
  modal: {
    height: '100%',
    maxWidth: '94vw',
    width: '94vw',
    opacity: 0.95,
    background: colors.nightBlue,
    padding: '3vh 3vw',
  },
  overlay: {
    padding: 0,
    background: 'none',
    overflow: 'hidden',
  },
};

class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <BaseModal {...this.props} styles={styles}>
        {children}
      </BaseModal>
    )
  }
};

export default Modal;
