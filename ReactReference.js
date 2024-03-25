//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const d = new Date(2022, 1, 1, 1);
const hours = d.getHours();
let newGreet = "";
let customStyle = { color: "" };

if (hours < 5) {
  newGreet = "Good night!";
  customStyle.color = "#2f4f4f";
} else if (hours < 13) {
  newGreet = "Good morning!";
  customStyle.color = "red";
} else if (hours < 19) {
  newGreet = "Good afternoon!";
  customStyle.color = "green";
} else {
  newGreet = "Good evening!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle} className="heading">
      {newGreet}
    </h1>
  </div>,
  document.getElementById("root")
);
