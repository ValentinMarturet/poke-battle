import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext.jsx';
import { AuthContext } from '../auth/AuthContext.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';
import PublicRoute from './PublicRoutes.jsx';
import Login from '../Components/Login.jsx';
import App from '../App';




const AppRoutes = () => {
  return (
    <AuthProvider>
        <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='*' element={
                    <ProtectedRoutes>
                        <Routes>
                            <Route path='/' element={<App />}/>
                        </Routes>
                    </ProtectedRoutes>
                }/>
                <Route path='/login' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </PublicRoute>
                }/> */}
        </Routes>
    </AuthProvider>
  )
}

export default AppRoutes