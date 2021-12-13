import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Characters from "../components/Characters";
import Header from "../components/Header";
import api from "../api/axios";

function Home() {

  return (
    <div className="home-container">
      <Header />
      <Characters/>
    </div>
  );
}

export default Home;
