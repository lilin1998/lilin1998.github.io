import React from 'react';

import Header from './Header';
import AboutMe from './AboutMe';
import ViewReview from './ViewReview';
import AddReview from './AddReview';
import Reviews from './Reviews';
import ReviewModal from './ReviewModal';
import Footer from './Footer';

export default class Portfolio extends React.Component {
    state = {
        reviews: [],
        selectedReview: undefined
    };

    handleDeleteReviews = () => {
        this.setState(() => ({ reviews: [] }));
    };

    handleDeleteReview = (reviewToRemove) => {
        this.setState((prevState) => ({
            reviews: prevState.reviews.filter((review) => {
                return reviewToRemove !== review;
            })
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedReview: undefined }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.reviews.length);
        const review = this.state.reviews[randomNum];
        this.setState(() => ({
            selectedReview: review
        }))
    };

    handleAddReview = (review) => {
        if (!review) {
            return 'Please enter a valid suggestion.';
        } else if (this.state.reviews.indexOf(review) > -1) {
            return 'This suggestion already exists.'
        }

        this.setState((prevState) => ({ reviews: prevState.reviews.concat([review]) }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('reviews');
            const reviews = JSON.parse(json);

            if (reviews) {
                this.setState(() => ({ reviews: reviews }));
            } 
        } 
        catch (e) {
            //Do nothing
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.reviews.length !== this.state.reviews.length) {
            const json = JSON.stringify(this.state.reviews);
            localStorage.setItem('reviews', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    render() {
        const title = 'Li Lin';
        const subtitle = 'Welcome to my page!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <AboutMe />
                    <div className="widget">
                    <ViewReview 
                        hasReviews={this.state.reviews.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Reviews 
                        reviews={this.state.reviews} 
                        hasReviews={this.state.reviews.length > 0} 
                        handleDeleteReviews={this.handleDeleteReviews}
                        handleDeleteReview={this.handleDeleteReview}
                    />
                    <AddReview handleAddReview={this.handleAddReview}/>
                    <ReviewModal 
                        selectedReview={this.state.selectedReview}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}