import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginFirstpage } from '../../screens/loginpage/loginFirstpage'
import { LoginInput } from '../login-input/LoginInput'


export const RouterCom = () => {
    return (
        <Routes>
            <Route path='/' Component={LoginFirstpage}/>
            <Route path='/LoginPage' Component={LoginInput}/>
        </Routes>
    )
}
