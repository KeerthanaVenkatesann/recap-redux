

import React from "react";
import { connect } from "react-redux";
import { Increment, Decrement, Reset } from "./Action";

const mapStateToProps = state => ({
  count: state.ReducerRedux.count
});

const Counter = ({ count, Increment, Decrement, Reset }) => {
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default connect(mapStateToProps, { Increment, Decrement, Reset })(Counter);
