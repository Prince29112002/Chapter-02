import React, { useState } from "react";

function Forms() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>This Is Task F</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            onChange={changeHandler}
            placeholder="Username"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="E-mail"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </div>

      <div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          Username : {username}
        </p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          E-mail : {email}
        </p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          Password : {password}
        </p>
      </div>
    </>
  );
}

export default Forms;
