import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

const HomeBlogCard = ({image, date, alt, title, subtitle, content}) => {
    return(
        <div className="homeBlog-card">
            <div className="homeBlog-card--img">
                <img src={image} alt={alt} />
            </div>
            <div className="homeBlog-card--content">
                <span>
                    {date}
                </span>
                <h4>
                    {title}
                </h4>
                <p>
                    {subtitle}
                </p>
                <p>
                    {content}
                </p>
                <Link to="/">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default HomeBlogCard