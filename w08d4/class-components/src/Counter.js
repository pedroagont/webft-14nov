import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      count: this.props.count || 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('Button clicked!');
    // this.state.count = this.state.count + 1; // THIS NO
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('rendering!');
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
