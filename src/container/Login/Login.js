import React from 'react'
import './Login.scss'
import SignIn from '../../component/sign-in/sign-in'
import SignUp from '../../component/sign-up/sign-up'

function Login() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Login
