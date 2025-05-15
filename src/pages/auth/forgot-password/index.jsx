import './index.scss'
import React, { useState } from 'react'
import SecondaryHeader from '/src/components/headers/SecondaryHeader'
import AuthInputBox from '/src/components/inputs/AuthInputBox'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [changeUI, setChangeUI] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return(
        <div>
            {/* <SecondaryHeader /> */}
            <div className="login">
                <div className="login-wrapper">
                    <div className="login--left">
                        <h2>
                            Good to see you again!
                        </h2>
                        <p className='login--left-subtitle'>
                            Please login to your account
                        </p>
                        <form action="">
                            <AuthInputBox 
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={handleEmailChange}
                                id='email'
                            />
                            <AuthInputBox 
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={handlePasswordChange}
                                id='password'
                            />
                            <button>
                                Login
                            </button>
                        </form>
                        <div className="auth-line--wrapper">
                            <div className="auth-line"></div>
                            <span className="or">OR</span>
                            <div className="auth-line"></div>
                        </div>
                        <div className="social-auth">
                            <button>
                                <img src="/public/google-logo-search-new-svgrepo-com.svg" alt="google logo" />
                                <span>
                                    Login with Google
                                </span>
                            </button>
                            <button>
                                <img src="/public/apple-logo-svgrepo-com.svg" alt="apple logo" />
                                <span>
                                    Login with Apple
                                </span>
                            </button>
                        </div>
                        <div className='alternate-auth'>
                            <p>
                                Don't have an account?
                                <Link to='/auth/create-account' onClick={
                                    () => setChangeUI(true)
                                }>
                                     Sign up
                                </Link>
                            </p>
                        </div>
                        <div className="forgot-password">
                            <Link to='/auth/forgot-password'>
                                Reset password
                            </Link>
                        </div>
                    </div>
                    <div className="login--right">
                        <img src="https://static.pxlecdn.com/photos/692660438/original/aafce74c7d603201bf85.jpg" alt="login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login