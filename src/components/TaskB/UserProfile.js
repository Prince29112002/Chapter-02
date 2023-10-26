import React from "react";

const UserProfile = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>This Is TASK B</h1>
        <h2>Name: {props.Name}</h2>
        <img style={{ width: "180px" }} src={props.Image} alt={props.Name} />
        <h2>Bio: {props.Bio}</h2>
      </div>
    </>
  );
};

export default UserProfile;
