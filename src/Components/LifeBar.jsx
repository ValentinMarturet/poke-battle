import React from "react";
import styles from "../Styles/LifeBar.module.css";

const LifeBar = ({ ps }) => {
  return (
    <div>
      <div className={styles.hp}>HP: {ps}</div>
      <div className={styles.LifeBar}>
        <div
          className={styles.LifeContent}
          style={{ width: `${ps > 0 ? ps : 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LifeBar;
