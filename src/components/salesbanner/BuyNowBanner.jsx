import './index.scss'
import { Link } from 'react-router-dom'

const BuyNowBanner = () => {
    return(
        <div className="buynow-banner">
            <div className="buynow--innerwrapper">
                <div className="buynow-image">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F005cf413b1cd4b6b96e4cef40b2fcfcf" alt="buynow" />
                    <div className="buynow-image--overlay">
                        <div className="quickview">
                            <div className="quickview-dot">
                            </div>
                            <div className="quickview-dot">
                            </div>
                            <div className="quickview-dot">
                            </div>
                            <div className="quickview-dot">
                            </div>
                            <div className="quickview-dot">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buynow-content">
                    <h3>
                        Black Friday Sale
                    </h3>
                    <div className="buynow-banner-time">
                        <div className="buynow-banner-time--wrapper">
                            <span>
                                60
                            </span>
                            <span>
                                Days
                            </span>
                        </div>
                        <div className="buynow-banner--time-dot">
                            :
                        </div>
                        <div className="buynow-banner-time--wrapper">
                            <span>
                                45
                            </span>
                            <span>
                                Hours
                            </span>
                        </div>
                        <div className="buynow-banner--time-dot">
                            :
                        </div>
                        <div className="buynow-banner-time--wrapper">
                            <span>
                                32
                            </span>
                            <span>
                                Minutes
                            </span>
                        </div>
                        <div className="buynow-banner--time-dot">
                            :
                        </div>
                        <div className="buynow-banner-time--wrapper">
                            <span>
                                43
                            </span>
                            <span>
                                Seconds
                            </span>
                        </div>
                    </div>
                    <button>
                        <Link to="/">
                            Shop now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuyNowBanner