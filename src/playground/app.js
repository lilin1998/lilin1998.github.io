class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteReviews = this.handleDeleteReviews.bind(this);
        this.handleAddReview = this.handleAddReview.bind(this);
        this.handleDeleteReview = this.handleDeleteReview.bind(this);
        this.state = {
            reviews: []
        };
    }

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

    handleDeleteReviews() {
        this.setState(() => ({ reviews: [] }));
    }

    handleDeleteReview(reviewToRemove) {
        this.setState((prevState) => ({
            reviews: prevState.reviews.filter((review) => {
                return reviewToRemove !== review;
            })
        }));
    }

    handleAddReview(review) {
        if (!review) {
            return 'Please enter a valid suggestion.';
        } else if (this.state.reviews.indexOf(review) > -1) {
            return 'This suggestion already exists.'
        }

        this.setState((prevState) => ({ reviews: prevState.reviews.concat([review]) }));
    }

    render() {
        const title = 'Li Lin';
        const subtitle = 'Welcome to my page!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <AboutMe />
                <Reviews reviews={this.state.reviews} 
                    hasReviews={this.state.reviews.length > 0} 
                    handleDeleteReviews={this.handleDeleteReviews}
                    handleDeleteReview={this.handleDeleteReview}
                />
                <AddReview handleAddReview={this.handleAddReview}/>
            </div>
        );
    }
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}'s Portfolio</h1>
                {props.subtitle && <h3>{props.subtitle}</h3>}
            </div>
        );
};

Header.defaultProps = {
    title: 'Li Lin'
};

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleVisibility() {
        this.setState((prevState) => ({ visibility: !prevState.visibility }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleVisibility}>About Me</button>
                {this.state.visibility && (
                    <div>
                        <p>This is my humble attempt to put my knowledge to great use. I am currently a Year 3 NUS Information Systems Undergraduate who is passionate in software development and financial technology. Feel free to leave your feedback below so that I can continue to improve myself!</p>
                    </div>
                )}
            </div>
        );
    }
}

const Reviews = (props) => {
    return (
        <div>
            <h4>Suggestions:</h4>
            {props.reviews.length === 0 && <p>Please add a suggestion.</p>}
            {
                props.reviews.map((review) => (
                    <Review 
                        key={review} 
                        reviewText={review} 
                        handleDeleteReview={props.handleDeleteReview}
                    />
                ))
            }
            <button onClick={props.handleDeleteReviews} disabled={!props.hasReviews}>Remove All</button>
        </div>
    );
}

const Review = (props) => {
    return (
        <div>
            {props.reviewText}
            <button 
                onClick={(e) => {
                    props.handleDeleteReview(props.reviewText);
                }}
            >
                Remove
            </button>
        </div>
    );
}

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }

    onFormSubmit(e) {
        e.preventDefault();
    
        const review = e.target.elements.review.value.trim();
        const error = this.props.handleAddReview(review);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.review.value = '';
        }
    }
    
    render() {
        return (
            <div>
                <p>How can I improve?</p>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="review"/>
                    <button>Submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div> 
        );
    }
}

ReactDOM.render(<Portfolio />, document.getElementById('app'));