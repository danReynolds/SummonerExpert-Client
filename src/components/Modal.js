import React, { Component } from 'react';
import BaseModal from 'react-responsive-modal';

import { colors } from '../assets/styles/Common';

const styles = {
  modal: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    opacity: 0.95,
    background: colors.nightBlue,
    padding: '15vh 15vw',
  },
  overlay: {
    padding: 0,
    background: 'none',
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
