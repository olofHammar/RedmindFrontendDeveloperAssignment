import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { Backdrop } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { loadImage } from "../imageLoader";
import "../styles/detailModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    width: "80%",
    height: "90%",
    position: "absolute",
    overflowY: "scroll",
    outline: "none",
    bottom: 0,
    right: 0,
    color: "white",
    backgroundImage: "linear-gradient(0deg, rgb(11, 11, 17) 0%, #101010 100%)",
    borderTopLeftRadius: "25px",
    borderTop: "1px solid #303030",
    borderLeft: "1px solid #303030",
    borderRadius: 0,
    boxShadow: theme.shadows[5],
  },
}));

export default function DetailModal({
  children,
  name,
  height,
  mass,
  hairColor,
  skinColor,
  eyeColor,
  birthYear,
  searchTerm,
  imageIndex,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="row"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open} transition={Slide} direction="up" timeout={500}>
          <div className={classes.paper} id="modalContainer">
            <img className="modal-image" src={loadImage(imageIndex, searchTerm)} />
            <div className="info-container">
              <h1>{name}</h1>
              <h4>
                <span>Height: </span>
                {height}
              </h4>
              <h4>
                <span>Mass: </span>
                {mass}
              </h4>
              <h4>
                <span>Hair Color: </span>
                {hairColor}
              </h4>
              <h4>
                <span>Skin Color: </span>
                {skinColor}
              </h4>
              <h4>
                <span>Eye Color: </span>
                {eyeColor}
              </h4>
              <h4>
                <span>Birth Year: </span>
                {birthYear}
              </h4>
            </div>
            <button className="btn-close-modal" onClick={handleClose}>X</button>
          </div>
        </Slide>
      </Modal>
    </>
  );
}
