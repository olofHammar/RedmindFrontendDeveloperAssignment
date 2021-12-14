import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { loadImage } from "../imageLoader";
import { Paper } from "@material-ui/core";

function Profile({ name, imageIndex, searchTerm }) {

  useEffect(() => {
    console.log(searchTerm)
  }, [])

  return (
    <Paper className="profile-container">
      <img className="profile-image" src={loadImage(imageIndex, searchTerm)} />
      <h2 className="title-container">{name}</h2>
    </Paper>
  );
}

export default Profile;
