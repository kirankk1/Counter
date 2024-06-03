import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: 0 };
  onIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  onDecrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };
  onReset = () => {
    this.setState((prevState) => {
      return { count: 0 };
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="description">{this.state.count}</p>
        <div>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>

          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
