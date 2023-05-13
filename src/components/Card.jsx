/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../App.css";

const Card = ({ id, first_name, last_name, email, domain }) => {
  return (
    <div className="card">
      <div>
        <strong>ID:</strong> {id}
      </div>
      <div className="name">
        <strong>Name:</strong> {first_name + " " + last_name}
      </div>
      <div className="email">
        <strong>Email:</strong> {email}
      </div>
      <div className="domain">
        <strong>Domain:</strong> {domain}
      </div>
    </div>
  );
};

export default Card;
