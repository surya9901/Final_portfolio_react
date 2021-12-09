import React, { useEffect } from 'react';
import "./Project.css";
import Aos from 'aos';
import env from "../settings"

function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1400,
        });
    }, [])

    const project = [{
        "title": "TODO",
        "description": "This is a dialy planner web app built using JavaScript, Node.js, React, Bootstrap, MongoDB, Bcryptjs and jsonwebtoken.",
        "github_link": "https://github.com/surya9901/ToDo_reactPart",
        "site_link": "https://suryastodo.netlify.app/"
    }, {
        "title": "Music player",
        "description": "This is a Music player web app built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "github_link": "https://github.com/surya9901/Music-Player-Frontend",
        "site_link": "https://gmusic.netlify.app/",
    }, {
        "title": "E-Diary Manager",
        "description": "Manage your day to day Diary data Online built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "github_link": "https://github.com/surya9901/URL-Shortner",
        "site_link": "https://e-diary.netlify.app/",
    }, {
        "title": "B Blog",
        "description": "A Blog web app built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "github_link": "https://github.com/surya9901/Blog-App-Frontend",
        "site_link": "https://bblogs.netlify.app/",
    }, {
        "title": "Nationalize",
        "description": "This is a web app which uses Api to display the Nationality & Probability by giving your name as the input, it was built using JavaScript, DOM and Bootstrap.",
        "github_link": "https://github.com/surya9901/Nationalize",
        "site_link": "https://nationalizeio.netlify.app/",
    }]


    return (
        <div className="container mb-3">
            <div className="cv_preview mt-1 mb-3" data-aos="flip-left">
                <a className="btn" href={env.resume} target="_blank" rel="noreferrer noopener" >
                    Resume{" "}
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-in">
                {
                    project.map(obj => {
                        return (
                            <div className="col">
                                <div className="card h-100" id="project_card">
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.title}</h5>
                                        <p className="card-text">{obj.description}</p>
                                    </div>
                                    <div className="web_link text-center">
                                        <div className="row">
                                            <div className="col col-lg-6">
                                                <a className="btn" id="git_btn" href={obj.github_link} target="_blank" rel="noreferrer noopenner">
                                                    View on <i className="fab fa-git-alt"></i>
                                                </a>
                                            </div>
                                            <div className="col col-lg-6">
                                                <a className="btn" id="site_btn" href={obj.site_link} target="_blank" rel="noreferrer noopenner">
                                                    View live <i className="fab fa-chrome"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default Project
