import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'


const ProtectedRoutes = ({ children }) => {

    const context = useContext(AuthContext)

    useEffect(() => {
        console.log(context)
    })



    if (context.state.isLogedIn) {
        return children
    } else {
        console.log(context);
        return <Navigate to='/login'/>
    }

}

export default ProtectedRoutes