import React from "react";
import styles from "../Styles/LifeBar.module.css";

const LifeBar = ({ ps, enemy }) => {
  return (
    <div>
      <div className={styles.hp}>HP: {ps}</div>
      <div className={styles.LifeBar}>
        <div
          className={`${styles.LifeContent} ${
            enemy ? styles.ELifeContent : ""
          }`}
          style={{ width: `${ps > 0 ? ps : 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LifeBar;
