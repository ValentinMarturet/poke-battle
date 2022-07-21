import React from "react";
import { backgroundPerType } from "../utils/backgroundPerType";
import styles from "../Styles/Vs.module.css";

const Vs = ({ myPokemon, enemyPokemon, handleUnselect, startBattle }) => {
  return (
    <>
      <div className={styles.vs_battle}>
        <div
          className={styles.my_pokemon}
          style={backgroundPerType(myPokemon.data.types[0].type.name)}
        >
          <img
            src={myPokemon.data.sprites.front_default}
            alt="Pokemon"
            className={styles.img}
          />
          <h2 className={styles.pokename}>{myPokemon.pokemon.name}</h2>
        </div>
        <h1 className={styles.vs_text}>VS.</h1>
        <div
          className={styles.my_pokemon}
          style={backgroundPerType(enemyPokemon.data.types[0].type.name)}
        >
          <img
            src={enemyPokemon.data.sprites.front_default}
            alt="Pokemon"
            className={styles.img}
          />
          <h2 className={styles.pokename}>{enemyPokemon.pokemon.name}</h2>
        </div>
      </div>
      <div className={styles.vs_btn}>
        <button className={styles.btn} onClick={startBattle}>
          Empezar Batalla!
        </button>
        <button className={styles.btn} onClick={handleUnselect}>
          Volver a elegir Pokemones
        </button>
      </div>
    </>
  );
};

export default Vs;
