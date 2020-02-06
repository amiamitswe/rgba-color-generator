import React from "react";
import InputRange from "react-input-range";

const userInput = props => {
  this.style = {
    paddingTop: "50px",
    paddingBottom: "20px"
  },

  this.rbgaTitle = {
    fontSize: "40px",
    textAlign: "center",
    color: "green"
  }

  return (

    <div style={this.style}>
      <h1 style={this.rbgaTitle}>==== RGBA ====</h1>
      <InputRange
        maxValue={100}
        minValue={0}
        value={props.opvalue}
        formatLabel={value => `${value} %`}
        onChange={props.changeOpacity}
        onChangeComplete={value => console.log(value)}
      />

      <InputRange
        maxValue={255}
        minValue={0}
        value={props.valueR}
        formatLabel={value => `${value} R-Color`}
        onChange={props.changeR}
        onChangeComplete={value => console.log(value)}
      />

      <InputRange
        maxValue={255}
        minValue={0}
        value={props.valueG}
        formatLabel={value => `${value} G-Color`}
        onChange={props.changeG}
        onChangeComplete={value => console.log(value)}
      />

      <InputRange
        maxValue={255}
        minValue={0}
        value={props.valueB}
        formatLabel={value => `${value} B-Color`}
        onChange={props.changeB}
        onChangeComplete={value => console.log(value)}
      />
    </div>
  );
};

export default userInput;
