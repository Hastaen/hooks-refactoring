import React, { Component } from 'react';

class SimpleDropdown extends Component {
    state = {list: []};

    updateCounter = () => {
      this.setState({counter: this.state.counter + 1})
    };

  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
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
  