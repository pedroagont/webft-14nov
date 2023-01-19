import React from 'react';

class HelloClass extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return <h4>Hello {this.props.name} from class component!</h4>;
  }
}

export default HelloClass;
