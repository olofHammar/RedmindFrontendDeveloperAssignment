import React, { useEffect } from "react";
import "../styles/profile.css";
import api from "../api/axios";
import { loadImage } from "../imageLoader";
import DetailModal from "../modals/DetailModal";

function Profile({
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  homeWorld,
  imageIndex,
}) {
  return (
    <div className="profile-container">
      <DetailModal>
        <img className="profile-image" src={loadImage(imageIndex)} />
        <div className="title-container">{name}</div>
      </DetailModal>
    </div>
  );
}

export default Profile;
