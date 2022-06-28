import React from "react";

const AttackCard = ({ at, moveName, handleAttack, eps }) => {
  return (
    <div onClick={handleAttack}>
      {moveName && <h1>{moveName}</h1>}
      <h2>Daño: {eps - at(eps)}</h2>
    </div>
  );
};

export default AttackCard;
