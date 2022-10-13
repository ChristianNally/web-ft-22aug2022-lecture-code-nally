import React from 'react';
import Child from './Child';

const Props = class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      sport: 'basketball'
    };

    this.clickHandler = this.clickHandler.bind(this); // recommended
  }

  clickHandler(){
    // this.state.count = this.state.count + 1; DO NOT DO THIS
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const output = JSON.stringify(this.state);
    return (
      <div className="props">
        <h2>Monkey Was Here!!!</h2>
        <p>{output}</p>
        <p>{this.props.message}</p>

        <button onClick={this.clickHandler}>Click Me</button>
        <h3>Count: {this.state.count}</h3>

        {/* <Child message={this.state.message} count={this.state.count}>
          <p>Happy Birthday!</p>
        </Child> */}
      </div>
    );
  }
};

export default Props;
