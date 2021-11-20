import React, {useEffect} from 'react';
import image from './image.jpg';
import './Home.css';
import Typewriter from "typewriter-effect";
import Aos from 'aos';


function Home() {
    useEffect(() => {
        Aos.init({
            duration: 700,
        });
    }, [])
    return (
        <>
            <div className="container text-center mt-5" id="home_container">
                <div className="home_detail mt-3">
                    <div>
                        <img className="photo" data-aos="zoom-out" src={image} alt="man" />
                    </div>
                    <div className="detail mt-4" data-aos="zoom-in">
                        <h1>I'm Surya</h1>
                        <p className="mt-3"><Typewriter
                            options={{
                                strings: ["Hi There 👋", "I'm a Full Stack Developer!"],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1000
                            }}
                        /></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
