import React from "react";
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

export default function Cardss() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        This Is Task G
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "200px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: "1rem",
          }}
        >
          <ImageCard
            Image="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/a/m/q/small-spos14556-poster-mahinder-singh-dhoni-ms-dhoni-indian-original-imagkb9ahnuszfeb.jpeg?q=90"
            alt="MSD photo"
          />
          <TextCard
            Title="MS DHONI"
            Text="He was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. "
          />
        </div>
      </div>
    </>
  );
}
