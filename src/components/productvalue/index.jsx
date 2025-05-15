import { div } from 'framer-motion/client'
import './index.scss'

const ProductValue = ({image, title, subtitle, alt}) => {
    return(
        <div className="pv--wrapper">
            <div className="pv-img" aria-label={alt}>
                {image}
            </div>
            <div className="pv-content">
                <h4>
                    {title}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default ProductValue