import React, { useReducer } from "react";
import { useState } from "react";
import styles from "../Styles/Selection.module.css";
import { backgroundPerType } from "../utils/backgroundPerType";
import AttackCard from "./AttackCard";
import Vs from "./Vs";

const reducer = (state, action) => {
  switch (action.type) {
    case "ATTACK":
      return {
        ...state,
        enemy: { ...state.enemy, ps: action.payload(state.enemy.ps) },
      };
    case "EATTACK":
      return { ...state, me: { ...state.me, ps: action.payload(state.me.ps) } };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  me: {
    ps: 100,
    attacks: [(eps) => eps * 0.2 + 15, (eps) => eps - 25],
  },
  enemy: {
    ps: 100,
    attacks: [(eps) => eps * 0.2 + 15, (eps) => eps - 50 + eps * 0.1],
  },
};

const Selection = ({ myPokemon, enemyPokemon, handleUnselect }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [battleLoop, setBattleLoop] = useState(false);
  const startBattle = (e) => {
    e.preventDefault();
    setBattleLoop(true);
  };
  const endBattle = (e) => {
    e.preventDefault();
    setBattleLoop(false);
    dispatch({ type: "RESET" });
  };
  const handleAttack = () => {};

  return (
    <>
      {!battleLoop && (
        <Vs
          myPokemon={myPokemon}
          enemyPokemon={enemyPokemon}
          handleUnselect={handleUnselect}
          startBattle={startBattle}
        />
      )}

      {battleLoop && (
        <>
          <h1>Batalla</h1>
          <button
            onClick={() => console.log(myPokemon.data.moves[0].move.name)}
          >
            Test
          </button>
          <AttackCard
            at={state.me.attacks[0]}
            moveName={myPokemon.data.moves[0].move.name}
            handleAttack={handleAttack}
            eps={state.enemy.ps}
          />
        </>
      )}
    </>
  );
};

export default Selection;
