import React from 'react';

export default class AddReview extends React.Component {
    state = {
        error: undefined
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    
        const review = e.target.elements.review.value.trim();
        const error = this.props.handleAddReview(review);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.review.value = '';
        }
    };
    
    render() {
        return (
            <div>
                <form className="add-review" onSubmit={this.onFormSubmit}>
                    <input className="add-review__input" type="text" name="review"/>
                    <button className="button">Add Review</button>
                </form>
                {this.state.error && <p className="add-error">{this.state.error}</p>}
            </div> 
        );
    }
}