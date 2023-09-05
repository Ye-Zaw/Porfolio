import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from "react-scroll";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ei Ei Lwin</span><br/>Senior Software Developer</span>
                <p className="introPara">I am a skilled software developer <br/> with experiece of developing a lot of projects</p>
                <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire Me" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro