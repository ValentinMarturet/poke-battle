import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import styles from "../Styles/Selection.module.css";
import { backgroundPerType } from "../utils/backgroundPerType";
import AttackCard from "./AttackCard";
import LifeBar from "./LifeBar";
import Vs from "./Vs";
import customStyles from "../Styles/modalStyle";
import randomNumber from "../utils/randomNumber";

const reducer = (state, action) => {
  switch (action.type) {
    case "ATTACK":
      return {
        ...state,
        enemy: { ...state.enemy, ps: action.payload.at(state.enemy.ps) },
      };
    case "EATTACK":
      return {
        ...state,
        me: { ...state.me, ps: action.payload.at(state.me.ps) },
      };
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
    setBattleLoop(false);
    dispatch({ type: "RESET" });
  };
  const handleMyAttack = (attack) => {
    dispatch({
      type: "ATTACK",
      payload: {
        at: attack,
      },
    });
  };

  useEffect(() => {
    if (state.enemy.ps > 0 && state.enemy.ps != 100) {
      dispatch({
        type: "EATTACK",
        payload: {
          at: state.enemy.attacks[randomNumber(1)],
        },
      });
    }
  }, [state.enemy.ps]);

  // modal logic
  const [modalIsOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (state.me.ps <= 0 || state.enemy.ps <= 0) {
      setIsOpen(true);
    }
  }, [state.me.ps, state.enemy.ps]);

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
          <div className={styles.battleGround}>
            <ReactModal
              isOpen={modalIsOpen}
              onAfterClose={endBattle}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1>{state.me.ps > 0 ? "Has Ganado!!!" : "Has Perdido."}</h1>
              <h2>Click para continuar...</h2>
            </ReactModal>
            <div className={styles.enemyPokemon}>
              <img
                className={styles.img}
                src={enemyPokemon.data.sprites.front_default}
              />
              <LifeBar ps={state.enemy.ps} enemy={true} />
            </div>
            <div className={styles.myPokemon}>
              <img
                className={styles.img}
                src={myPokemon.data.sprites.back_default}
              />
              <LifeBar ps={state.me.ps} enemy={false} />
            </div>
          </div>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <div className={styles.attacks}>
            <AttackCard
              at={state.me.attacks[0]}
              moveName={myPokemon.data.moves[0].move.name}
              handleAttack={handleMyAttack}
              eps={state.enemy.ps}
            />
            <AttackCard
              at={state.me.attacks[1]}
              moveName={myPokemon.data.moves[1].move.name}
              handleAttack={handleMyAttack}
              eps={state.enemy.ps}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Selection;
