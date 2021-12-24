import React from "react";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

export default function NotificationsPage(props) {
  var classes = useStyles();

  return (
    <div className={classes.containerHeight}>Notification Page</div>
  );

}