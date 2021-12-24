import React from "react";

// styles
import useStyles from "./styles";

export default function Dashboard(props) {
  var classes = useStyles();
  return (
   <div className={classes.containerHeight}>Dashboard Page</div>
  );
}

