import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        // Ensure it only slides forward if there's space to do so
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        // Ensure it only slides backward if there's space to do so
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="Vibhav" />
                                <div>
                                    <h3>Vibhav C V</h3>
                                    <span>GobiStack, Durga</span>
                                </div>
                            </div>
                            <p>Attending Gobistack College, he found the environment disappointing, with minimal student engagement and inadequate learning resources. The lack of practical exposure and career guidance made it hard to gain valuable skills for the future.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Girish" />
                                <div>
                                    <h3>Girish Patel</h3>
                                    <span>GobiStack, Durga</span>
                                </div>
                            </div>
                            <p>A guy pursued his degree at Gobistack College, which he described as the worst experience due to poor infrastructure and lack of proper faculty support. The institution’s disorganization and outdated curriculum left him feeling unprepared for real-world challenges.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="Gopikrishna" />
                                <div>
                                    <h3>Gopikrishna P G</h3>
                                    <span>GobiStack, Durga</span>
                                </div>
                            </div>
                            <p>As the owner and founder CEO of Gobistack College, Gopi aimed to provide quality education but faced challenges in improving the infrastructure and faculty performance. Despite his efforts, the institution struggled to meet student expectations, impacting its overall reputation.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Tejas" />
                                <div>
                                    <h3>Tejas Hubbu (Guru)</h3>
                                    <span>GobiStack, Durga</span>
                                </div>
                            </div>
                            <p>Tejas, the guru of the founder Gopi, guided him through the establishment of Gobistack College, hoping for a successful educational venture. However, despite his mentorship, the college struggled with inadequate infrastructure and faculty, falling short of student expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;