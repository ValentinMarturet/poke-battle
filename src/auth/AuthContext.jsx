import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext()

const initialState = () => {
    if (localStorage.getItem('authToken')) {
        return JSON.parse(localStorage.getItem('authToken'))
    } else {
        return {isLogedIn: false};
    }
    
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('authToken', true)
            return {...state,
                isLogedIn: true
            }
        case 'LOGOUT':
            localStorage.removeItem('authToken')
            return {...state,
                isLogedIn: false
            }
        default:
            return state;
    }
}


export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {isLogedIn: false})


  return (
    <AuthContext.Provider value={{state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

