import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigCard from "./PigCard";

class App extends Component {
  state = {
    filterGreased: false
  }

  handleFilterClick = () => {
    this.setState({filterGreased: !this.state.filterGreased})
  }

  render() {
    let pigArray
    return (
      <div className="App">
        <Nav handleFilterClick={this.handleFilterClick}/>
        <div className="index">
          {this.state.filterGreased ? pigArray = hogs.filter((object => object.greased)) : pigArray = hogs,
          pigArray.map(hogObject => <PigCard hogObject={hogObject}/>)}
        </div>
      </div>
    );
  }
}

export default App;
