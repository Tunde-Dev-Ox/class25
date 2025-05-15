import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HoverSlideShow = ({ images }) => {
    const hoverSlideShowData = [
        {
            id: 1,
            image: '/main-c1_14187525-fae6-4296-9da9-92087759acd9.webp',
            text: 'Balenciaga',
            link: '/balenciaga'
        },
        {
            id: 2,
            image: '/main-c1.webp',
            text: 'Balmain',
            link: '/balmain'
        },
        {
            id: 3,
            image: '/main-c3.webp',
            text: 'Prada',
            link: '/prada'

        },
        {
            id: 4,
            image: '/main-c4.webp',
            text: 'Gucci',
            link: '/gucci'
        }
    ]

    const [currentImage, setCurrentImage] = useState(0)

    const imageLength = hoverSlideShowData.length;

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % imageLength);
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + imageLength) % imageLength);
    }

    const goToImage = (index) => {
        setCurrentImage(index);
    }

    return (
        <div className="hoverSlideShow">
                <div className="hoverSlideShow--image">
                    <motion.div
                    initial={{ opacity: .7, x: 100, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1.3 }}
                    >
                    <img src={hoverSlideShowData[currentImage].image} alt="hoverSlideShow" className='hoverSlideShow--image'/>
                    </motion.div>
                </div>
                <div className="hoverSlideShow--text">
                    {hoverSlideShowData.map((image, index) => (
                        <Link to={image.link} key={image.id} className={currentImage === index ? 'active' : ''} onMouseEnter={() => goToImage(index)}><span>{image.text}</span></Link>
                    ))}
                </div>
        </div>
    )
}

export default HoverSlideShow;

