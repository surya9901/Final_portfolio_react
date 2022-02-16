import React, { useEffect } from 'react'
import './Skills.css'
import Aos from 'aos';

function Skills() {

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const tech_skills = [
        {
            "skill": "JavaScript", "percent": "80"
        }, {
            "skill": "HTML & CSS", "percent": "80"
        }, {
            "skill": "Node.js", "percent": "80"
        }, {
            "skill": "MongoDB", "percent": "80"
        }, {
            "skill": "React", "percent": "75"
        }, {
            "skill": "Express", "percent": "75"
        }]

    const add_skill = [
        {
            "skill": "Love to learn and work on different and new programming languages."
        }, {
            "skill": "Easily Adaptable with team members and learn new things."
        }, {
            "skill": "Good at Communication."
        }]

    return (
        <div className="container" id="skills_container" >
            <div className="skill_detail">
                <h1 className="text-center" data-aos="zoom-in">SkillSet</h1>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="technical_skill mt-3">
                            <h4 data-aos="zoom-in">Technical Skills:</h4>
                            <div data-aos="zoom-in">
                                {
                                    tech_skills.map((obj) => {
                                        return (
                                            <>
                                                <h5 className="mt-2">{obj.skill}</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped  progress-bar-animated" role="progressbar" style={{ "width": `${obj.percent}%`, "backgroundColor": "goldenrod" }} aria-valuenow={obj.percent} aria-valuemin="0" aria-valuemax="100">{obj.percent}%</div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* div for spacing between */}
                    </div>
                    <div className="col-lg-5">
                        <div className="additional_skill mt-3">
                            <h4 data-aos="zoom-in">Interest & other Skills:</h4>
                            <ul className="skill_point" data-aos="zoom-in">
                                {
                                    add_skill.map(obj => {
                                        return (
                                            <li>{obj.skill}</li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="apps_skill text-center mt-4">
                                <h4 data-aos="zoom-in">I Play in:</h4>
                                <div className="row mt-4" data-aos="zoom-in">
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-react"></i>
                                        </div>
                                        <p >React</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-html5" ></i>
                                        </div>
                                        <p>HTML</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-css3" ></i>
                                        </div>
                                        <p>CSS</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-js"></i>
                                        </div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-node"></i>
                                        </div>
                                        <p>Node.js</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fas fa-database"></i>
                                        </div>
                                        <p>MongoDB</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fab fa-git-alt"></i>
                                        </div>
                                        <p>Github</p>
                                    </div>
                                    <div className="col col-lg-3">
                                        <div className="skill_icons" >
                                            <i className="fas fa-code"></i>
                                        </div>
                                        <p>VS Code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
