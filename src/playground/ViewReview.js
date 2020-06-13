import React from 'react';

const ViewReview = (props) => (
  <div>
    <button
    className= " button button--link"
      onClick={props.handlePick}
      disabled={!props.hasReviews}
    >
      Click here to view suggestions.
    </button>
  </div>
);

export default ViewReview;