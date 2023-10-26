import React from "react";

export default function Lists() {
  const Names = [
    "Rohit Sharma (c)",
    "Hardik Pandya (vc)",
    "Shubman Gill",
    "Virat Kohli",
    "Shreyas Iyer",
    "KL Rahul",
    "Ravindra Jadeja",
    "Shardul Thakur",
    "Jasprit Bumrah",
    "Mohammed Siraj",
    "Kuldeep Yadav",
    "Mohammed Shami",
    "Ravichandran Ashwin",
    "Ishan Kishan",
    "Suryakumar Yadav",
  ];

  const listNames = Names.map((Name) => <li key={Name.toString()}>{Name}</li>);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>This Is Task E</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>{listNames}</ul>
      </div>
    </>
  );
}
