import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';

function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])


    const exp = [
        {
            "numbers": 3,
            "title": "Full-Stack Projects"
        },
        {
            "numbers": 10,
            "title": "Projects"
        }, {
            "numbers": 6,
            "title": "Months Learning"
        }]

    return (
        <div className="container">
            <div className="cv_preview" data-aos="flip-left">
                <a className="btn" href="https://drive.google.com/file/d/1VBG_8FzACM27HbsHAbAsimgfPySTkEFT/view?usp=sharing" target="_blank" rel="noreferrer noopener" >
                    Resume{" "}
                    <i class="fas fa-cloud-download-alt"></i>
                </a>
            </div>
            <div className="preview_box text-center" data-aos="zoom-in">
                    <h1>Experience:</h1>
                <div className="row">
                    {
                        exp.map(obj => {
                            return (
                                <div className="col col-lg-4" id="exp_col">
                                    <div className="box mt-2 mb-2">
                                        <h1>{obj.numbers}+</h1>
                                        <h6>{obj.title}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
