import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss'

const SectionTop = ({title, subtitle, link, linkText}) => {
    return(
        <div className="sectionTop">
            <div className="sectionTop--left">
                <h3>
                    {title}
                </h3>
                <p>
                    {subtitle}
                </p>
            </div>
            <div className="sectionTop--right">
                <Link to={link}>
                    {linkText}
                </Link>
            </div>
        </div>
    )
}

export default SectionTop;