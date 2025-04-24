import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/Login page/LoginPage'
import { LoginInput } from '../components/login-input/LoginInput'
import { Dash } from '../screens/dashBoard/Dash'
import { ViewReg } from '../screens/ViewRegister/ViewReg'



export const RouterCom = () => {
    return (
        <Routes>
            <Route path='/' Component={LoginPage}/>
            <Route path='/LoginPage' Component={LoginInput}/>
            <Route path='/Dashboard' Component={Dash}/>
            <Route path='/ViewRegister' Component={Dash}/>
            <Route path='/PaymentHistory' Component={Dash}/>
            <Route path='/Logout' Component={Dash}/>

        </Routes>
    )
}
