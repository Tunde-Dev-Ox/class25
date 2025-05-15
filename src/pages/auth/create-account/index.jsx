import './index.scss';
import { Link } from 'react-router-dom';
import { account } from '../../../lib/appwriteConfig';
import {toast} from 'react-toastify';

const CreateAccount = () => {

    const loginWithGoogle = () => {
        account.createOAuth2Session(
            'google',
            'http://localhost:5173/dashboard',
              // Success redirect
            'http://localhost:5173/auth/create-account'
            // Failure redirect
        ).then(() => {
             toast.success("Your cleaning has been booked successfully!");
        }).catch((error) => {
            toast.error('Login failed! Please try again.');
            console.error('Login error:', error);
        }
        );
    };

    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login--left">
                    <h2>
                        Create an account for free!
                    </h2>
                    <div className="social-auth">
                        <button onClick={loginWithGoogle}>
                            <img src="/google-logo-search-new-svgrepo-com.svg" alt="google logo" />
                            <span>
                                Sign up with Google
                            </span>
                        </button>
                    </div>
                    <div className='alternate-auth'>
                        <p>
                            Already have an account?
                            <Link to='/auth/login'>
                                Login
                            </Link>
                        </p>
                    </div>
                    <p className='agree-terms'>
                        By creating an account, you agree to marketing emails and our <Link to="/">Privacy Policy</Link> and <Link to="/">Terms of Use</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;