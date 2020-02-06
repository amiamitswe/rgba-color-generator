import React, { Component } from "react";
import "./app.css";

import UserInput from "./input-output/UserInput/UserInput";
import UserOutput from "./input-output/UserOutput/UserOutput";

// import InputRange from 'react-input-range';

class App extends Component {
  state = {
    user: "amiamitswe",
    bacColor: this.color,
    opacity: 1,
    color: [this.colorR, this.colorG, this.colorB, this.opacity],
    colorR: 50,
    colorG: 50,
    colorB: 50,
    value: 50
  };

  RchangeBGHandler = colorR => {
    this.setState({
      color: [
        colorR,
        this.state.colorG,
        this.state.colorB,
        this.state.opacity
      ],
      bacColor: "rgba(" + this.state.color + ")",
      colorR: colorR
    });

    this.style = {
      backgroundColor: this.state.bacColor,
      opacity: this.state.opacity
    };

    // console.log(this.state.bacColor);
  };

  GchangeBGHandler = colorG => {
    this.setState({
      bacColor: "rgba(" + this.state.color + ")",
      color: [
        this.state.colorR,
        colorG,
        this.state.colorB,
        this.state.opacity
      ],
      colorG: colorG
    });

    this.style = {
      backgroundColor: this.state.bacColor,
      opacity: this.state.opacity
    };

    // console.log(this.state.bacColor);
  };

  BchangeBGHandler = colorB => {
    this.setState({
      bacColor: "rgba(" + this.state.color + ")",
      color: [
        this.state.colorR,
        this.state.colorG,
        colorB,
        this.state.opacity
      ],
      colorB: colorB
    });

    this.style = {
      backgroundColor: this.state.bacColor,
      opacity: this.state.opacity
    };
    // console.log(this.state.bacColor);
  };


  changeOpacity = opacity => {
    this.setState({
      opacity: opacity / 100
    });

    this.style = {
      backgroundColor: this.state.bacColor,
      opacity: this.state.opacity
    };

    // console.log(this.state.bacColor);
  };

  
  render() {

    this.style = {
      backgroundColor: "rgba("+this.state.colorR+","+this.state.colorG+","+this.state.colorB+","+this.state.opacity+")",
      height: "100vh"
    };
    
    return (
      <div style={this.style}>
        <UserInput
          name={this.state.user}
          changed={this.usernameChangeHandler}
          
          changeR={this.RchangeBGHandler}
          valueR={this.state.colorR}

          changeG={this.GchangeBGHandler}
          valueG={this.state.colorG}

          changeB={this.BchangeBGHandler}
          valueB={this.state.colorB}

          opvalue = {this.state.opacity * 100}
          changeOpacity={this.changeOpacity}

          value={this.state.value}
          testttt={this.testttt}
          />

        {this.state.bacColor ? 
        <UserOutput colorName={this.state.bacColor}/> : 
        <UserOutput 
          colorName={"rgba("+this.state.colorR+","+this.state.colorG+","+this.state.colorB+","+this.state.opacity+")"}
        />}
        
      </div>
    );
  }
}

export default App;
