import './index.scss';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({ img, text, link }) => {
    return (
        <Link to={link} className="productCategoryCard">
            <img src={img} alt="productCategoryCard" className='productCategoryCard--image'/>
            <div className="productCategoryCard--info">
                <h4 to={link}>{text}</h4>
            </div>
        </Link>
    )
}

export default ProductCategoryCard