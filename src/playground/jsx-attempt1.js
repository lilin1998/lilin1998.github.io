console.log('App.js is running!');

// JSX - JavaScript XML
const user = {
    name: 'Tan Li Lin',
    age: 22,
    contactNumber: 96487880
};

function getContactNumber(contactNumber) {
    if (contactNumber) {
        return <p>Contact Number: +65{contactNumber}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}'s Portfolio</h1> 
        {user.age && <p>Age: {user.age}</p>}
        {getContactNumber(user.contactNumber)}
    </div>
);

const userDetail = document.getElementById('user');

const userBackground = {
    title: 'Education Background:',
    courseOne: 'Bachelor of Computing (Honours), Information Systems',
    courseTwo: 'Diploma in International Business'
    
}

const userReview = {
    title: 'How can I improve this website?',
    reviews: []
};

//About Me
let visibility = false; 

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const introduction = (
        <div>
            <button onClick={toggleVisibility}>
                {visibility ? 'About Me' : 'About Me'}
            </button>
            {visibility && (
                <div>
                    <p>Welcome to my page! This is my humble attempt to put my knowledge to great use. I am currently a Year 3 NUS IS Undergraduate who is passionate in software development and financial technology. Feel free to leave your feedback below so that I can continue to improve!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(introduction, about);
};

const about = document.getElementById('about');
render();

//Suggestions
const onFormSubmit = (e) => {
    e.preventDefault();

    const review = e.target.elements.review.value;

    if (review) {
        userReview.reviews.push(review);
        e.target.elements.review.value = '';
        renderReview();
    }
};

const education = document.getElementById('education');

const removeAll = () => {
    userReview.reviews = [];
    renderReview();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * userReview.reviews.length);
    const number = userReview.reviews[randomNum];
    alert(number);
};

const renderReview = () => {
    const template = (
        <div>
            <p>{userBackground.title}</p>
            <ol>
                <li>{userBackground.courseOne}</li>
                <li>{userBackground.courseTwo}</li>
            </ol>
            <p>{userReview.title}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <button disabled={userReview.reviews.length === 0} onClick={removeAll}>Remove All</button>
            <ol>
            {
                userReview.reviews.map((review) => {
                    return <li key={review}>{review}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="review"/>
                <button>Submit</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template, education);
}

ReactDOM.render(templateTwo, userDetail);
renderReview();

