import './index.scss';
import { Link } from 'react-router-dom';
import { account } from '../../../lib/appwriteConfig';

const Login = () => {

    const loginWithGoogle = () => {
        account.createOAuth2Session(
            'google',
            'http://localhost:5173/dashboard',  // ✅ success redirect
            'http://localhost:5173/auth/login'  // ❌ failure redirect
        );
    };

    return (
        <div>
            <div className="login">
                <div className="login-wrapper">
                    <div className="login--left">
                        <h2>
                            Good to see you again!
                        </h2>
                        <p className='login--left-subtitle'>
                            Please login to your account
                        </p>
                        <div className="social-auth">
                            <button onClick={loginWithGoogle}>
                                <img src="/google-logo-search-new-svgrepo-com.svg" alt="google logo" />
                                <span>
                                    Login with Google
                                </span>
                            </button>
                        </div>
                        <div className='alternate-auth'>
                            <p>
                                Don’t have an account?
                                <Link to='/auth/create-account'>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;