import React from "react";
import styles from "../Styles/AttackCard.module.css";

const AttackCard = ({ at, moveName, handleAttack, eps }) => {
  return (
    <div className={styles.card} onClick={() => handleAttack(at)}>
      {moveName && <h1>{moveName}</h1>}
      <h3>Daño: {eps - at(eps)}</h3>
    </div>
  );
};

export default AttackCard;
