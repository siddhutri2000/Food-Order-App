import React from "react";
// import { Fragment } from "react/cjs/react.production.min";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
