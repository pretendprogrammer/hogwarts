import React, { Component } from "react";
import PigDetails from './PigDetails'

class PigCard extends Component {

  state = {
    showPigDetails: false
  }

  handleClick = () => this.setState({showPigDetails: !this.state.showPigDetails})

  render() {
    let pigImage = require(`../hog-imgs/${this.props.hogObject.name}.jpg`)
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.hogObject.name}</h1>
        <img src={pigImage} alt='failed'></img>
        {this.state.showPigDetails ? <PigDetails hogObject={this.props.hogObject}/> : null}
      </div>
    );
  }
}

export default PigCard;
