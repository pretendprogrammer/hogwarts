import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigCard from "./PigCard";

class App extends Component {
  state = {
    filterGreased: false,
    sortByName: false,
    sortByWeight: false
  }

  handleButtonClick = (event) => {
    let button = event.target.name
    this.setState({[button]: !this.state[button]})
  }

  render() {
    let pigArray
    return (
      <div className="App">
        <Nav handleButtonClick={this.handleButtonClick}/>
        <div className="index">
          {this.state.filterGreased ? pigArray = hogs.filter((object => object.greased)) :
          this.state.sortByWeight ? pigArray = hogs.sort((objA, objB) => objA.weight - objB.weight) :
          this.state.sortByName ? pigArray = hogs.sort((objA, objB) => objA.name.localeCompare(objB.name)) : pigArray = hogs,
          pigArray.map(hogObject => <PigCard hogObject={hogObject}/>)}
        </div>
      </div>
    );
  }
}

export default App;
