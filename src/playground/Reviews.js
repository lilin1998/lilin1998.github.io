import React from 'react';
import Review from './Review';

const Reviews = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Suggestions:</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteReviews} 
                disabled={!props.hasReviews}
            >
            Remove All
            </button>
        </div>
        
        {props.reviews.length === 0 && <p className="widget__message">Please add a suggestion.</p>}
        {
            props.reviews.map((review, index) => (
                <Review 
                    key={review} 
                    reviewText={review} 
                    count={index + 1}
                    handleDeleteReview={props.handleDeleteReview}
                />
            ))
        }
    </div>
);

export default Reviews;