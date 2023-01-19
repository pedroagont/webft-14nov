import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      src: this.props.src,
    };
  }

  componentDidMount() {
    console.log('component mounted!');

    setTimeout(() => {
      fetch('https://shibe.online/api/shibes')
        .then((res) => res.json())
        .then((data) => this.setState({ src: data[0] }));
    }, 2000);
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  render() {
    console.log('rendering!');
    return (
      <img
        style={{ marginTop: '1em' }}
        width="100px"
        src={this.state.src}
        alt="shiba inu"
      />
    );
  }
}

export default Counter;
