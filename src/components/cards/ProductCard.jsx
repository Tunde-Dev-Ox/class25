import './index.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({img, type, name, price, rating, tag}) => {
    return (
        <Link to="/" className="productCard">
            <div className="productCard--image">
                <img src={img} alt="productCard" className='productCard--image'/>
            </div>
            <div className="productCard--info">
                <h4>{type}</h4>
                <h5>{name}</h5>
                <span>{price}</span>
                <span>{rating}</span>
            </div>
            <button>
                {tag}
            </button>
        </Link>
    )
}

export default ProductCard