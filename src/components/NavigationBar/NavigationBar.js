import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <div className={styles["Navigation-Bar-Wrapper"]}>
      <div className={styles["Navigation-Bar"]}>
        <NavLink className={styles["NavLink"]} to="/">
          {`🌎`} Home
        </NavLink>
        <NavLink className={styles["NavLink"]} to="Spacecrafts">
          {`🚀`} Spacecrafts
        </NavLink>
        <NavLink className={styles["NavLink"]} to="Planets">
          {`🪐`} Planets
        </NavLink>
      </div>
    </div>
  );
}

export default NavigationBar;
