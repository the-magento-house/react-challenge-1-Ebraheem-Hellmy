import React from "react";
import { Component } from 'react';

class Timer extends Component {

  constructor(props){
    super();
    this.state = {
      counter: 0
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  render () {
    return (
      <div>
        the timer: {this.state.counter}
      </div>
    )
  }
}

export default Timer
