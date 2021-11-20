import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jpg'
import "./About.css"
import Aos from 'aos';


function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="about-image col-lg-4 text-center">
                        <img data-aos="zoom-out" alt="surya" src={Image} />
                    </div>
                    <div className="about-detail col-lg-8" data-aos="zoom-in">
                        <h3>
                            Hey, Welcome to Surya's Portfolio Website!
                        </h3>
                        <p>
                            I'm Gnanasurya SJ, I completed my Bachelor's Degree
                            and reside at Hosur. I am a person who has high passion in
                            Technologies.
                        </p>
                        <p>
                            I have been Coding for around 6 months now. I look back to those days
                            where it all began from blank screens to
                            beautiful websites/web application nowadays and that's how far I have grown now.
                            I Love to create full stack applications using MERN stack preferably.
                        </p>
                        <p>
                            I have a dream to master all the Technologies and become the
                            TOP developers in the World and now I am working toward it!
                        </p>
                        <p>
                            I love Travelling and Exploring different places and my most favourite game is Badminton.
                        </p>
                        <Link className="btn mb-5" to="/contact">
                            Connect <i className="fab fa-connectdevelop" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
