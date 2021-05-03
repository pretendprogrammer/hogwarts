import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br></br>
      <button name='filterGreased' onClick={props.handleButtonClick}>Show me the grease!</button>
      <button name='sortByName' onClick={props.handleButtonClick}>Sort by Name</button>
      <button name='sortByWeight' onClick={props.handleButtonClick}>Sort by Weight</button>
    </div>
  );
};

export default Nav;
