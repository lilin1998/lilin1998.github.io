import React from 'react';
import Modal from 'react-modal';

const ReviewModal = (props) => (
    <Modal
        isOpen={!!props.selectedReview}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Review"
        closeTimeoutMS={200}
        className="modal"
    >
    <h3 className="modal__title">Selected Review</h3>
    {props.selectedReview && <p className="modal__body">{props.selectedReview}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default ReviewModal;