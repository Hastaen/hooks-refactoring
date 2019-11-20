import React, { Component } from 'react';

const lang = {
    resetLabel: 'Reset',
    incrementLabel: 'Increment',
    decrementLabel: 'Decrement',
}

import './styles.css';

class SimpleCounterButtonDeux extends Component {
    state = {counter: 0};

    resetCounter = () => {
        this.setState({counter: 0})
    };

    incrementCounter = () => {
      this.setState({counter: this.state.counter + 1})
    };

    
    decrementCounter = () => {
        this.setState({counter: this.state.counter - 1})
    };

  
    render() {
      return (
        <section>
            <div>
                <button
                    type="button"
                    id="resetButton"
                    onClick={this.resetCounter}
                >
                    {lang.resetLabel}
                </button>
                <button
                    type="button"
                    id="incrementButton"
                    onClick={this.incrementCounter}
                >
                    {lang.incrementLabel}
                </button>
                <button
                    type="button"
                    id="decrementButton"
                    onClick={this.decrementCounter}
                >
                    {lang.decrementLabel}
                </button>
            </div>
            <div className="counter-result-wrapper">
                Counter: {this.state.counter}
            </div>
        </section>
      );
    }
  }

  export default SimpleCounterButtonDeux;
  