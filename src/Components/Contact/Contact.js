import React, { useEffect, useState } from 'react'
import "./Contact.css";
import Aos from 'aos'
import axios from 'axios'
import env from '../settings'


function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const [status, setStatus] = useState("Submit");
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)

    let msgsent = () => {
        setSent(true)
        setTimeout(() => {
            setSent(false)
        }, 1500);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending..")
        let details = {
            Name: name,
            LastName: lastName,
            Email: email,
            Phone: phone,
            Message: message
        };
        try {
            let postData = await axios.post(`${env.api}/contact`, { message: details });
            setStatus("Submit")
            setName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setMessage("")
            msgsent()
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container text-center col col-lg-6 mt-4" data-aos="zoom out">
                <div className="name_box col-lg-12 text-center">
                    {
                        sent ? <p style={{ "color": "green" }} data-aos="zoom-out">Your message has been sent <i className="fas fa-check"></i></p> : ""
                    }
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">First Name</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Email-id</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                <label for="floatingInput">Phone number</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control mb-3" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Leave a comment here" style={{ "height": "100px" }} id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Leave your comment here....</label>
                    </div>
                    <input className="btn" id="contact_submit" type="Submit" value={status} />
                </div>
                <div className="contact_box text-center col-lg-12 mt-4" data-aos="zoom-out">
                    <h4>Connect with me</h4>
                    <div className="contact_icons col">
                        <div className="row">
                            <div className="col-lg-3">
                                <a href="https://github.com/surya9901" target="_blank" rel="noreferrer noopener"><i class="fab fa-github"></i></a>
                            </div>
                            <div className="col col-lg-3">
                                <a href="https://www.linkedin.com/in/gnanasurya-sj-93021628" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin"></i></a>
                            </div>
                            <div className="col col-lg-3">
                                <a href="mailto:surya9901@gmail.com?subject=subject text" target="_blank" rel="noreferrer noopener"><i class="fas fa-envelope-open-text"></i></a>
                            </div>
                            <div className="col-lg-3">
                                <a href={env.resume} target="_blank" rel="noreferrer noopener"><i class="far fa-file"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Contact
