import './index.scss'

const MissionCard = () => {
    return (
        <div className="missionCard">
            <div className="missionCard--image">
                <img src="/assets_444142b2cae54a19aeb8b5ba245feffe_70cf7e4aa6bd4e5fabdefb4ccf6e9670.jpeg" alt="missionCard" className='missionCard--image'/>
            </div>
            <div className="missionCard--info">
                <h4>
                    We are on a mission to donate 10 million pieces of clothes to the less-privilege in the next seven years.
                </h4>
                <p>
                    Read about our progress in the blog.
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default MissionCard