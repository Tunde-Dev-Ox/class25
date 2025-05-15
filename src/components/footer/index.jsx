import './index.scss'
import { Link } from 'react-router-dom'
import FooterList from '/src/components/footer/FooterList.jsx'
import { BsTwitter, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    const footerListArray = [['Company', 'About Us', 'Careers', 'Press'], ['Resources', 'Become a cleaner', 'Join host community', 'Blog', 'Help Center'], ['Location', 'Cleaners in Lagos', 'Cleaners in Abuja', 'Cleaners in Port Harcourt', 'Cleaners in Ibadan', 'Cleaners in Enugu', 'Cleaners in Accra']];

    return(
        <div className="footer">
            <div className="footer-innerwrapper">
                <div className="footer-top">
                   <div className="logo">
                    {/* <img src="/Lulush-white.svg" alt="logo" />
                     */}
                      <span>
                        Zafique
                      </span>
                   </div>
                   <div className="footer-top--nav">
                        <FooterList 
                            list={footerListArray[0]}
                        />
                        <FooterList 
                            list={footerListArray[1]}
                        />
                        <FooterList 
                            list={footerListArray[2]}
                        />
                    </div>
                    <div className="newsletter">
                        <div className="newsletter-innerwrapper">
                            <h3>
                                Newsletter
                            </h3>
                            <p>
                                Sign up for our newsletter and receive one free week of cleaning.
                            </p>
                            <input type="email" name="email" id="email" placeholder='Email'/>
                            <span>
                            By providing your email, you agree to receive marketing emails and accept our <Link to="/">Privacy policy</Link> and <Link to="/">Terms</Link>.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-line"></div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Zafique - Main, All Rights Reserved. Powered by <Link to="/">NextBuildr</Link></p>
                    <div className="footer-privacy">
                        <Link to="/">
                            <BsTwitter />
                        </Link>
                        <Link to="/">
                            <BsFacebook />
                        </Link>
                        <Link to="/">
                            <BsInstagram />
                        </Link>
                        <Link to="/">
                            <BsWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer