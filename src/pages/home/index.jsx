import MainHeader from '../../components/headers/MainHeader';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import ProductValue from '../../components/productvalue';
import { IoCall } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import { FaGift } from 'react-icons/fa';
import { VscWorkspaceTrusted } from "react-icons/vsc";
// import HomeBlogCard from '../../components/cards/HomeBlogCard';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/index.js';
import Steps from '../../components/how-it-works';
import TestimonialCard from '../../components/cards/testimonialCard'
import Faq from '../../components/faq';
import homeFaqs from '../../utils/faqData.js';


const Home = () => {
    const { user } = useUser();
    if (user) return <Navigate to="/dashboard" />
    return (
        <div className='app'>
            <MainHeader />
            <main>
                <Hero />
                <div className={styles.suggestion}>
                    <div className={styles.suggestion__innerwrapper}>
                        <h2>
                            Suggestions
                        </h2>
                        <div className={styles.suggestion__card__wrapper}>
                            <Link to="/auth/create-account" className={styles.suggestion__card}>
                                <div className={styles.suggestion__card__image}>
                                    <img src="/cleaner2.svg" alt="cleaning" />
                                </div>
                                <div className={styles.suggestion__card__content}>
                                    <h3>
                                        Book a cleaner
                                    </h3>
                                    <p>
                                        Book a cleaner for your short-let property.
                                    </p>
                                    <Link to="/auth/Login" className={styles.suggestion__card__btn}>
                                        Book Now
                                    </Link>
                                </div>
                            </Link>
                            <Link to="https://forms.gle/PPqhwrf7ceSenFt87" className={styles.suggestion__card}>
                                <div className={styles.suggestion__card__image}>
                                    <img src="/cleaner1.svg" alt="cleaning" />
                                </div>
                                <div className={styles.suggestion__card__content}>
                                    <h3>
                                        Become a cleaner
                                    </h3>
                                    <p>
                                        Become a cleaner and earn money while you clean.
                                    </p>
                                    <Link to="https://forms.gle/PPqhwrf7ceSenFt87" className={styles.suggestion__card__btn}>
                                        Join us
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.why__choose}>
                    <div className={styles.why__choose__innerwrapper}>
                        <h2>
                            Why hosts trusts us
                        </h2>
                        <div className={styles.why__choose__card__wrapper}>
                             <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/vet.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Vetted cleaners
                                    </h3>
                                    <p>
                                        All our cleaners are vetted and trained to provide the best service.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/distance.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Cleaners proximity
                                    </h3>
                                    <p>
                                        Our cleaners are located close to your property, so you can get a cleaner in no time.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/flexible.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Flexible booking
                                    </h3>
                                    <p>
                                        One time or recurring bookings, you can book a cleaner for any time.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/trust.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Trust and safety
                                    </h3>
                                    <p>
                                        We take your safety seriously, all our cleaners are background checked and insured.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/not.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Notifications
                                    </h3>
                                    <p>
                                        Get notified when your cleaner is on the way, and when they arrive.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.why__choose__card}>
                                <div className={styles.why__choose__card__image}>
                                    <img src="/sat.svg" alt="cleaning" />
                                </div>
                                <div className={styles.why__choose__card__content}>
                                    <h3>
                                        Satisfaction guarantee
                                    </h3>
                                    <p>
                                        If you are not satisfied with the service, we will make it right.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.how_it_works}>
                    <div className={styles.how_it_works__innerwrapper}>
                        <h2>
                            How it works
                        </h2>
                        <Steps />
                    </div>
                </div>
                <div className={styles.testimonials}>
                    <div className={styles.testimonials__innerwrapper}>
                        <h2>
                            What our customers say
                        </h2>
                        <div className={styles.testimonial__card__wrapper}>
                        <TestimonialCard 
                            text={`"Zafique has been a lifesaver for my Airbnb. The cleaners are always on time and do a fantastic job."`}
                            description="Airbnb Host in Lagos"
                            name="Jeff Benson"
                            image="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                        <TestimonialCard 
                            text={`"The booking process is so easy and the cleaners are always professional. Highly recommend this service!"`}
                            description="Airbnb Host in Abuja"
                            name="Sarah Johnson"
                            image="https://images.pexels.com/photos/3760595/pexels-photo-3760595.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        />
                        <TestimonialCard 
                            text={`"Zafique has made my life so much easier. I can focus on my guests while they take care of the cleaning."`}
                            description="Airbnb Host in Port Harcourt"
                            name="Michael Smith"
                            image="https://images.pexels.com/photos/19518393/pexels-photo-19518393/free-photo-of-portrait-of-an-african-man-wearing-sweater.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                        />
                    </div>
                    </div>
                </div>
                <div className={styles.for_business}>
                    <div className={styles.for_business__innerwrapper}>
                            <div className={styles.for_business__content__text}>
                                <h3>
                                    For apartment managers and offices 
                                </h3>
                                <p>
                                    Managing 5+ units? We offer volume discounts and priority scheduling. Tailor-made solutions for your business.
                                </p>
                                <Link to="/auth/Login" className={styles.for_business__content__btn}>
                                    Talk to us
                                </Link>
                            </div>
                            <div className={styles.for_business__content__image}>
                                <img src="/2312174_2.svg" alt="cleaning" />
                            </div>
                    </div>
                </div>
                <section className={styles.faq}>
                <div className={styles.faq__inner__wrapper}>
                    <h2>
                        Frequently asked questions
                    </h2>
                    <div className={styles.faq__bars__wrapper}>
                        <div className={styles.faq__bar}>
                           <Faq 
                            faqData={homeFaqs}
                           />
                        </div>
                    </div>
                </div>
                </section>
                <div className={styles.become_cleaner}>
                    <div className={styles.become_cleaner__innerwrapper}>
                        <div className={styles.become_cleaner__content__text}>
                            <h3>
                                Become a cleaner
                            </h3>
                            <p>
                                Join our team of vetted cleaners and earn money while you clean. Flexible hours, competitive pay, and a supportive community.
                            </p>
                            <Link to="/auth/Login" className={styles.become_cleaner__content__btn}>
                                Join us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.pv}>
                    <div className={styles.pv__innerwrapper}>
                       <ProductValue 
                        image={<IoCall className={styles.pv__icon}/>}
                        alt="phone call"
                        title="Customer support"
                        subtitle="Mon - Sat, 8am - 6pm"
                       />
                       <ProductValue 
                        image={<GiReturnArrow className={styles.pv__icon}/>}
                        alt="phone call"
                        title="Feedback"
                        subtitle="We value your feedback"
                       />
                       <ProductValue 
                        image={<FaGift className={styles.pv__icon}/>}
                        alt="phone call"
                        title="Refer a friend"
                        subtitle="Get one free cleaning"
                       />
                       <ProductValue 
                        image={<VscWorkspaceTrusted className={styles.pv__icon}/>}
                        alt="trust"
                        title="Trusted by 2000+ hosts"
                        subtitle="We've gained the trust of over 2000+ hosts"
                       />
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Home