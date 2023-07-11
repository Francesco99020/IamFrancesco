import React from "react";
import email from '../images/email.png';
import phone from '../images/phone.png';
import SchoolEmailIcon from '../images/SchoolEmailIcon.png';

function Contact(){
    return(
        <div id='Contacts'>
            <h1 className='contact-h1'>Looking for more Information?</h1>
            <h2 className="contact-h2">Contact Me</h2>
            <div className="contact-holder">
                <div className="phone">
                    <img className="contact-icon" src={phone} alt='Phone-contact-holder' />
                    <h4 className="phone-number">1+ (516)-655-9192</h4>
                </div>
                <div className="personal-email">
                    <img className="contact-icon" src={email} alt='personal-email-contact' />
                    <a className="personal-email-address" href='mailto:francescoda1234@gmail.com'>francescoda1234@gmail.com</a>
                </div>
                <div className="school-email">
                    <img className="contact-icon" src={SchoolEmailIcon} alt='school-email-contact' />
                    <a className="school-email-address" href='mailto:fdarrigo@nyit.edu'>fdarrigo@nyit.edu</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;