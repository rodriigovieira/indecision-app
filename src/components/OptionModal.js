import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Fuck me"
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">You Must...</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Close box</button>
    </Modal>
)

export default OptionModal
