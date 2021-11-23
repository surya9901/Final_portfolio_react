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
        "title": "URL Shortner",
        "description": "This is a Url shortner a server side rendering web app built using JavaScript, Node.js, React, Bootstrap and MongoDB.",
        "github_link": "https://github.com/surya9901/URL-Shortner",
        "site_link": "https://gshort-urlshortner.herokuapp.com/",
    }, {
        "title": "Sb2 Admin",
        "description": "This is a React Admin web app used to display the CRUD operations, built using JavaScript, React, Axios, Usecontext Hook, React router dom and Bootsstrap.",
        "github_link": "https://github.com/surya9901/sb2admin",
        "site_link": "https://sb2admin.netlify.app/product",
    }, {
        "title": "UseState in React",
        "description": "This is a React web app used to display how UseState works, it was built using JavaScript, React and Bootstrap.",
        "github_link": "https://github.com/surya9901/use-state-react",
        "site_link": "https://619bcdf815ce2745f8b109d5--frosty-lumiere-2be181.netlify.app/",
    }, {
        "title": "E-commercer",
        "description": "This is a simple e-commerce web app template used to display how e-commerce works, it was built using JavaScript, React and Bootstrap.",
        "github_link": "https://github.com/surya9901/ecommerce-react",
        "site_link": "https://peaceful-panini-b18b92.netlify.app/",
    }, {
        "title": "Nationalize",
        "description": "This is a web app which uses Api to display the Nationality & Probability by giving your name as the input, it was built using JavaScript, DOM and Bootstrap.",
        "github_link": "https://github.com/surya9901/Nationalize",
        "site_link": "https://nationalizeio.netlify.app/",
    }, {
        "title": "Animie.io",
        "description": "This is a web app which uses Api to display the Animie details by giving your name of the animie as the input, it was built using JavaScript, DOM and Bootstrap.",
        "github_link": "https://github.com/surya9901/Dom_Manipulation_Annimie_API",
        "site_link": "https://animationapi.netlify.app/",
    }, {
        "title": "Cards",
        "description": "This is a simple web app which used to display cards with effects and see how props work, it was built using JavaScript, React and Bootstrap.",
        "github_link": "https://github.com/surya9901/Cards-react",
        "site_link": "https://surya9901.github.io/Cards-react/",
    }, {
        "title": "Pagination",
        "description": "This is a simple web app which used to display on how the pagination works, it was built using JavaScript, DOM and Bootstrap.",
        "github_link": "https://github.com/surya9901/Pagination",
        "site_link": "https://reverent-edison-e2d95f.netlify.app/",
    }]


    return (
        <div className="container mb-3">
            <div className="cv_preview mt-3" data-aos="flip-left">
                <a className="btn" href={env.resume} target="_blank" rel="noreferrer noopener" >
                    Resume{" "}
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1" data-aos="fade-in">
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
