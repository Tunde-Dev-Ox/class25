import './index.scss'
import { FaBasketShopping } from "react-icons/fa6";

const ShopWithUsPhotoCard = ({img, alt}) => {
    return (
        <div className="shopWithUsPhotoCard">
            <img src={img} alt={alt} className='shopWithUsPhotoCard--image'/>
            <span className="shopWithUsPhotoCard--info">
                <FaBasketShopping />
            </span>
        </div>
    )
}

export default ShopWithUsPhotoCard