import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    const [dropDown, setDropDown] = useState(false)

    const toggleOpen = () => {
        setDropDown(!dropDown)
    }

    const toggleClose = () => {
        setDropDown(false)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid" id="container_fluid">
                    <Link to="/" className="navbar-brand">
                        <h1 id="navbartitle">
                            <i className="fa fa-briefcase" aria-hidden="true"></i> Port<span>F</span>olio
                        </h1>
                    </Link>
                    <div className="dropDown" id="menu__container">
                        <button className="navbar-toggler" onClick={toggleOpen} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {
                                dropDown ? <i class="fas fa-times"></i> : <span className="navbar-toggler-icon"></span>
                            }
                        </button>
                        <div className={`collapse navbar-collapse ${dropDown ? "show" : ""}`} id="navbarNav">
                            <NavLink exact to="/" onClick={toggleClose} activeClassName="active">Home</NavLink>
                            <NavLink to="/about" onClick={toggleClose} activeClassName="active">About Me</NavLink>
                            <NavLink to="/skills" onClick={toggleClose} activeClassName="active">Skill Set</NavLink>
                            <NavLink to="/project" onClick={toggleClose} activeClassName="active">Projects</NavLink>
                            <NavLink to="/contact" onClick={toggleClose} activeClassName="active">Contact Me</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
