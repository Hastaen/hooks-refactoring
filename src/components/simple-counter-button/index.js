import React, { Component } from 'react';

class SimpleCounterButton extends Component {
    state = {counter: 0};

    updateCounter = () => {
      this.setState({counter: this.state.counter + 1})
    };

  
    render() {
      return (
        <div>
          <button
            type="button"
            id="counterButton"
            onClick={this.updateCounter}
          >
              Click count: {this.state.counter}
          </button>
        </div>
      );
    }
  }

  export default SimpleCounterButton;
  