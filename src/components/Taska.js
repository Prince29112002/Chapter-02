import React from "react";

const Taska = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>This Is Task A</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1>
          <a href="#home">Home</a>
        </h1>
        <h1>
          <a href="#about">About</a>
        </h1>
        <h1>
          <a href="#services">Services</a>
        </h1>
        <h1>
          <a href="#contact">Contact</a>
        </h1>
      </div>
    </>
  );
};

export default Taska;
