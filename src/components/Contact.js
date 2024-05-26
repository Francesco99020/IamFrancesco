import React, { useState } from "react";
import emailStatic from '../images/email.png';
import emailGif from '../images/email.gif';
import phoneStatic from '../images/phone.png';
import phoneGif from '../images/phone.gif';
import locationStatic from '../images/location.png';
import locationGif from '../images/location.gif';
import EmailForm from './EmailForm';

function Contact() {
    const [emailHovered, setEmailHovered] = useState(false);
    const [phoneHovered, setPhoneHovered] = useState(false);
    const [locationHovered, setLocationHovered] = useState(false);

    const handleMouseEnter = (setHovered) => {
        setHovered(true);
    };

    const handleMouseLeave = (setHovered) => {
        setHovered(false);
    };

    return (
        <div id='Contacts'>
            <h1 className='contact-h1'>Looking for more Information?</h1>
            <h2 className="contact-h2">Contact Me</h2>
            <EmailForm />
            <div className="contact-holder">
                <div className="phone" 
                     onMouseEnter={() => handleMouseEnter(setPhoneHovered)} 
                     onMouseLeave={() => handleMouseLeave(setPhoneHovered)}>
                    <img className="contact-icon" src={phoneHovered ? phoneGif : phoneStatic} alt='Phone-contact-holder' />
                    <h4 className="phone-number">1+ (516)-655-9192</h4>
                </div>
                <div className="personal-email" 
                     onMouseEnter={() => handleMouseEnter(setEmailHovered)} 
                     onMouseLeave={() => handleMouseLeave(setEmailHovered)}>
                    <img className="contact-icon" src={emailHovered ? emailGif : emailStatic} alt='personal-email-contact' />
                    <a className="personal-email-address" href='mailto:francescoda1234@gmail.com'>francescoda1234@gmail.com</a>
                </div>
                <div className="location" 
                     onMouseEnter={() => handleMouseEnter(setLocationHovered)} 
                     onMouseLeave={() => handleMouseLeave(setLocationHovered)}>
                    <img className="contact-icon" src={locationHovered ? locationGif : locationStatic} alt='location pin' />
                    <a className="location-address" href='https://www.google.com/maps/place/New+York,+NY/@40.6970193,-74.3093248,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu'>New York</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
