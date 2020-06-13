class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleSubmit() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const clicked = () => {
//     count++;
//     renderCounterApp(); //to rerender
//     console.log('clicked!');
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset!');
// };

// const buttons = document.getElementById('button');

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <p>Accounts: {count}</p>
//             <button id="instagram" className="instagram" onClick={clicked}>Instagram</button>
//             <button id="linkedIn" className="linkedIn" onClick={clicked}>LinkedIn</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateThree, buttons);
// };

// renderCounterApp();