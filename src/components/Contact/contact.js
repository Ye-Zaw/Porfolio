import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nv26ufr', 'service_nv26ufr', form.current, 'BTThDAc_xYSxaP0Mp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of company some of the notable companies I have worked with includes.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name" />
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Messages"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="facebook" className="link"/>
                        <img src={TwitterIcon} alt="twitter" className="link"/>
                        <img src={YouTubeIcon} alt="youtube" className="link"/>
                        <img src={InstagramIcon} alt="instagam" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact