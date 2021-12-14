import React from "react";
import "../styles/home.css";
import Characters from "../components/Characters";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Characters />
    </div>
  );
}

export default Home;
