// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {

    // get the weather and date information through API
    const [highest, setHighest] = React.useState(-100);
    const [lowest, setLowest] = React.useState(100);
    const [currDate, setCurrDate] = React.useState("");
    React.useEffect(()=>{
        fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles&forecast_days=1")
        .then(data=>data.json())
        .then(data=>{
            setHighest(Math.round(data.daily.temperature_2m_max[0]))
            setLowest(Math.round(data.daily.temperature_2m_min[0]))
            setCurrDate(data.daily.time[0])
        });
    },[])

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Xinyang(Leo) Xu</h4>
                    <p>University of Southern California</p>
                    <p>Viterbi School of Engineering</p>
                    <p>Computer Science B.S.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: <a href="mailto:xinyangxu-2023@outlook.com">xinyangxu-2023@outlook.com</a></p>
                    <p>Phone: <a href="tel:+12138397877">+1 213 839 7877</a></p>
                </div>
                <div className="footer-section">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/xinyangx" className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Epiphany625" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <p className='footer-weather'>
                        Los Angeles, {lowest}~{highest} °C
                    </p>
                    <p>
                        {currDate}
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Xinyang Xu. All rights reserved. Last Update: 2024-09-18</p>
            </div>
        </footer>
    );
};

export default Footer;
