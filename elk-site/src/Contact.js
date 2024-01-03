import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e1tmt2o', 'template_5blqy47', form.current, 'Bj-5_IhZNtaejnreK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return ( 
        <form ref={form} onSubmit={sendEmail}>
            <h2>Name</h2>
            <input type="text" name="from_name" />
            <h2>Email</h2>
            <input type="email" name="from_email" />
            <h2>Message</h2>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
     );
}
 
export default Contact;