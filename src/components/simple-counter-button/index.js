import React, { useState, useEffect } from 'react';

const SimpleCounterButton = () => {
    // state = {counter: 0};
    const [ counter, setCounter ] = useState(0);

    const updateCounter = () => {
      // this.setState({counter: this.state.counter + 1});
      setCounter(counter + 1);
    };

  
    
    return (
      <div>
        <button
          type="button"
          id="counterButton"
          onClick={() => updateCounter()}
        >
            Click count: {counter}
        </button>
      </div>
    );
    
  }

  export default SimpleCounterButton;
  