import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';
import env from "../settings"

function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    return (
        <div className="container">
            <div className="cv_preview" data-aos="flip-left">
                <a className="btn" href={env.resume} target="_blank" rel="noreferrer noopener" >
                    Resume{" "}
                    <i class="fas fa-cloud-download-alt"></i>
                </a>
            </div>
        </div>
    )
}

export default Project
