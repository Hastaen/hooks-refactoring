import React, { Component } from 'react';

class SimpleCounterButton extends Component {
    state = {counter: 0};

    updateCounter = () => {
      console.log('yolo');
      this.setState({counter: this.state.counter++})
    };

  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <button
            type="button"
            onClick={this.updateCounter}
          >
              Click count: {this.state.counter}
          </button>
        </div>
      );
    }
  }

  export default SimpleCounterButton;
  