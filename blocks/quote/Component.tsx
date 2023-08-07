import React from "react";
import { Type } from ".";
// import useStyles from "./css";

const Quote: React.FC<Omit<Type, "blockType">> = () => {
  const classes = useStyles();

  return <div className={classes} />;
};

export default Quote;
