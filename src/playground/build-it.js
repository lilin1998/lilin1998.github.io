let visibility = false; 

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const introduction = (
        <div>
            <h1>Li Lin</h1> 
            <button onClick={toggleVisibility}>
                {visibility ? 'About Me' : 'About Me'}
            </button>
            {visibility && (
                <div>
                    <p>Welcome to my page! This is my humble attempt to put my knowledge to great use. I am currently a Year 3 NUS undergraduate who is passionate in software development and financial technology. Feel free to leave your feedback below so that I can continue to improve!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(introduction, about);
};

const about = document.getElementById('about');
render();
