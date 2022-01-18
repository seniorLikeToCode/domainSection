import React from "react";
import "./Card.css";

function card({ data }) {
  return (
      <div className="DomainCard">
        <h1> {data.domainName} </h1>
        <img src={data.domainLogo} alt={data.domainName} width="300px" />
        <p> {data.content}</p>
      </div>
  );
}

export default card;
