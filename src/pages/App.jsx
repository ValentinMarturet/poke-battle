import { useContext, useReducer } from "react";
import { AuthContext } from "../auth/AuthContext.jsx";
import Cards from "../Components/Cards.jsx";
import Selection from "../Components/Selection.jsx";
import styles from "../Styles/App.module.css";

const axios = require("axios");

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        myPokemon: {
          pokemon: action.payload.pokemon,
          data: action.payload.data,
        },
      };
    case "UNSELECT":
      return {
        ...state,
        myPokemon: {
          pokemon: {},
          data: {},
        },
        enemyPokemon: {
          pokemon: {},
          data: {},
        },
      };
    case "ENEMYCHOICE":
      return {
        ...state,
        enemyPokemon: {
          pokemon: action.payload.pokemon,
          data: action.payload.data,
        },
      };

    default:
      return state;
  }
};

const initialState = {
  myPokemon: {
    pokemon: {},
    data: {},
  },
  enemyPokemon: {
    pokemon: {},
    data: {},
  },
};

function App() {
  const auth = useContext(AuthContext);
  const handleLogout = (e) => {
    e.preventDefault();
    auth.dispatch({ type: "LOGOUT" });
  };

  const [battleData, dispatch] = useReducer(reducer, initialState);

  const handleChoice = async (pokemon) => {
    const res = await axios.get(pokemon.url);
    if (battleData.myPokemon.pokemon.name) {
      dispatch({
        type: "ENEMYCHOICE",
        payload: {
          pokemon: pokemon,
          data: res.data,
        },
      });
      return null;
    }
    dispatch({
      type: "SELECT",
      payload: {
        pokemon: pokemon,
        data: res.data,
      },
    });
    console.log("Seleccionaste un pokemon", battleData.myPokemon.data);
  };

  const handleUnselect = () => {
    dispatch({ type: "UNSELECT" });
  };

  return (
    <>
      <button className={styles.logOut} onClick={handleLogout}>
        Cerrar Sesión
      </button>
      {!battleData.enemyPokemon.pokemon.name && (
        <Cards
          handleChoice={handleChoice}
          choice={battleData.myPokemon.pokemon.name}
        />
      )}
      {battleData.myPokemon.pokemon.name &&
        battleData.enemyPokemon.pokemon.name && (
          <Selection
            myPokemon={battleData.myPokemon}
            enemyPokemon={battleData.enemyPokemon}
            handleUnselect={handleUnselect}
          />
        )}
    </>
  );
}

export default App;
