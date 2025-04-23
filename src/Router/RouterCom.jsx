import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/Login page/LoginPage'
import { LoginInput } from '../components/login-input/LoginInput'
import { Dash } from '../screens/dashBoard/Dash'



export const RouterCom = () => {
    return (
        <Routes>
            <Route path='/' Component={LoginPage}/>
            <Route path='/LoginPage' Component={LoginInput}/>
            <Route path='/Dashboard' Component={Dash}/>

        </Routes>
    )
}
