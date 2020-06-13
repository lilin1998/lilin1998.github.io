import React from 'react';

const Review = (props) => {
    return (
        <div className="review">
            <p className="review__text">{props.count}. {props.reviewText}</p>
            <button 
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteReview(props.reviewText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Review;