import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from './components/Header'
import Example from './components/example'
import Home from './components/Home'
import "./styles.css";

class App extends Component {
  constructor(props){
    super();
    this.state = {
      homeLink: "Home"
    };
  }


  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-11 col-lg-offset-1">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-lg-11 col-lg-offset-1">
            <Home name="Hema"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 col-lg-offset-1">
            <Example/>
          </div>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
