import React from 'react'
import './contact.css'
import Lettering from '../lettering/lettering';

const Contact = ({
    email   = "mansour.alzahrani@yahoo.com",
    phone   = "+1 (647) 609-8129",
    linkeIn = "https://www.linkedin.com/in/mansour-alzahrani-rdd/",
    github  = "https://github.com/mans4321"
  }) => {

    return (
        <div>
            <Lettering 
                title="Get in touch"
                text={[
                "If you wanna get in touch, talk to me about a project collaboration or just say hi,",
                "fill up the awesome form below or send an email to rafael@caferati.me",
                "and ~let's talk.",
                ]}
            />

        </div>
    )
}

export default Contact;