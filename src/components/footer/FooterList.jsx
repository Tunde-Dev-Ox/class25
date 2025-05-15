import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const FooterList = ({list}) => {
    return(
        <ul className="footer-ul">
           {list.map((item, index) => (
            index === 0 ? (
                <span key={index} className="footer-ul--heading">
                    {item}
                </span> 
            ) : (
                <li key={index}>
                    <Link to="/">
                        {item}
                    </Link>
                </li>
            )
           ))}
        </ul>
    );
};

export default FooterList