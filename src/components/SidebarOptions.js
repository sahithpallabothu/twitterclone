import React from "react";
import classes from "./SidebarOptions.module.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div
      className={`${classes.sidebarOption} ${
        active && classes.sidebarOptionActive
      }`}
    >
      <Icon className={classes.icon} />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
