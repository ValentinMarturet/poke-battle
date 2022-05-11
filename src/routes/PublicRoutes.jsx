import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'



const PublicRoute = ({ children }) => {

    const context = useContext(AuthContext)

    useEffect(() => {
        console.log(context)
    })

    if (!context.state.isLogedIn) {
        return children
    } else {
        <Navigate to='/'/>
    }

}

export default PublicRoute