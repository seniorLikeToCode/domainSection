import React from "react";
import "./Card.css";

function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function changeBackground(e) {
  e.target.style.backgroundColor = getRandomColor();
  console.log(e);
}

function card({ data }) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">
          <h1> {data.domainName} </h1>
          <div className="flex">
            <img src={data.domainLogo} alt={data.domainName} />
          </div>
        </div>
        <div className="flip-card-back" >
          <p onMouseOver={changeBackground}> {data.content} </p>
        </div>
      </div>
    </div>
  );
}

export default card;
