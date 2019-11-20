import React, { useState } from 'react';

const lang = {
    resetLabel: 'Reset',
    incrementLabel: 'Increment',
    decrementLabel: 'Decrement',
}

import './styles.css';


function useCounterHandling() {
    const [counter, setCounter] = useState(0);
  
    const resetCounter = () => {
        setCounter(0);
    };
    
    const incrementCounter = () => {
        setCounter(counter + 1);
    };
    
    const decrementCounter = () => {
        setCounter(counter - 1);
    };
  
    return {
        counter,
        resetCounter,
        incrementCounter,
        decrementCounter,
    };
  }
  

const SimpleCounterButtonDeux = () => {
    const {
        counter,
        resetCounter,
        incrementCounter,
        decrementCounter,
    } = useCounterHandling()

      return (
        <section>
            <div>
                <button
                    type="button"
                    id="resetButton"
                    onClick={() => resetCounter()}
                >
                    {lang.resetLabel}
                </button>
                <button
                    type="button"
                    id="incrementButton"
                    onClick={() => incrementCounter()} 
                >
                    {lang.incrementLabel}
                </button>
                <button
                    type="button"
                    id="decrementButton"
                    onClick={() => decrementCounter()}
                >
                    {lang.decrementLabel}
                </button>
            </div>
            <div 
                className="counter-result-wrapper"
            >
                Counter: {counter}
            </div>
        </section>
      );
  }

  export default SimpleCounterButtonDeux;
  