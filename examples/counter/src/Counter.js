import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const increase = (value) => value + 1;
export const decrease = (value) => value - 1;
export const increaseIfOdd = (value) => value % 2 ? value + 1 : value;
export const decreaseIfEven = (value) => value % 2 === 0 ? value - 1 : value;

export class Counter extends PureComponent {
  componentDidMount = () => this.props.resaga.setValue('counter', 0);

  render = () => {
    const resaga = this.props.resaga;
    return (<p>
        Value {resaga.getValue('counter')}
      <br /><br />
      <button id="init" onClick={() => resaga.setValue('counter', 0)}>
            Reset value to 0
        </button>
      <button id="set100" onClick={() => resaga.setValue('counter', 100)}>
            Set Counter to 100
        </button>
      <br /><br />
      <button id="increase" onClick={() => resaga.setValue('counter', increase, (value) => console.log('increased', value))}>
            Increase
        </button>
      <button id="decrease" onClick={() => resaga.setValue('counter', decrease, (value) => console.log('decreased', value))}>
            Decrease
        </button>
      <br /><br />
      <button id="increaseIfOdd" onClick={() => resaga.setValue('counter', increaseIfOdd)}>
            Increase if odd
        </button>
      <button id="decreaseIfEven" onClick={() => resaga.setValue('counter', decreaseIfEven)}>
            Decrease if even
      </button>
      <br /><br />
      <button
        id="setObjectValue" onClick={() => resaga.setValue({ counter: 50 },
        ({ counter }) => console.log('setObjectValue', counter))}
      >
            Set by object (with value = 50)
      </button>
      <button
        id="setObjectFunc" onClick={() => resaga.setValue(
          { counter: (x) => x * 2, somethingElse: 'hiii' },
        ({ counter, somethingElse }) => console.log('setObjectFunc', counter, somethingElse))}
      >
            Set by object (with function x2)
      </button>
    </p>);
  }
}

Counter.propTypes = {
  resaga: PropTypes.object,
};

export default Counter;
