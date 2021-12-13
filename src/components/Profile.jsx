import React, { useEffect } from "react";
import "../styles/profile.css";
import { loadImage } from "../imageLoader";
import { Paper } from "@material-ui/core";

function Profile({
  name,
  imageIndex,
}) {
  return (
    <Paper className="profile-container">
       <img className="profile-image" src={loadImage(imageIndex)}/>
       <h2 className="title-container">{name}</h2>
    </Paper>
  );
}

export default Profile;
