import React, { Component } from 'react';
import { Modal, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { closeModal, openModal } from './modalActions';

const actions = { closeModal, openModal };

class UnauthModal extends Component {

  handleCloseModal = () => {
    if (this.props.location.pathname.includes('/event')) {
      this.props.closeModal();
    }
    else {
      this.props.history.goBack();
      this.props.closeModal();
    }
  }

  render() {
    const { openModal } = this.props;
    return (
      <Modal size="mini" open={true} onClose={this.handleCloseModal}>
        <Modal.Header>Musisz być zalogowany aby to zrobić!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>Aby zobaczyć tą stronę zaloguj lub zarejestruj się</p>
            <Button.Group widths={4}>
              <Button fluid color="teal" onClick={() => openModal('LoginModal')}>
                Zaloguj się
              </Button>
              <Button.Or />
              <Button fluid positive onClick={() => openModal('RegisterModal')}>
                Zarejestruj się
              </Button>
            </Button.Group>
            <Divider />
            <div style={{ textAlign: 'center' }}>
              <p>Lub kliknij anuluj, aby kontynuuować jako gość</p>
              <Button onClick={this.handleCloseModal}>Anuluj</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(connect(null, actions)(UnauthModal));
