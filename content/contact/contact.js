import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Background from "../../components/background/background";
import Section from "../../components/section/section";
import Content from "../../components/content/content";
import "./contact.css";


const Contact = withNavigationContext(({ fullpage }) => {
    return (
        <Section wrapper={true} backgroundColor="#292c35">
            <Background src="coding.jpg" />
            <Content
             main={
                <div className="contact__form">
                <div>
                    <h2>Get in Touch</h2>
                    <p>
                        If you wanna get in touch,fill up the awesome
                        form below or send an email to <strong><i>mansour.alzahrani@yahoo.com</i> </strong>and ~let's talk.
                    </p>
                </div>
                {/* <div className="email__form">
                    <div>
                        <h2>Get in touch</h2>
                
                    </div>
                </div> */}
                <div className="social__media">
                    <h4>Let's get social</h4>
                    <p>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
    
                    
                    <div className="flex-c-m">
                    <a 
                        className="social__item bg2"
                        href="https://www.linkedin.com/in/mansour-alzahrani-rdd/"
                        target="_blank"
                        >
                        <FontAwesomeIcon icon={faLinkedinIn}  style={{ color: 'white' , width:"90px"}} />
                    </a>
                    <a 
                      className="social__item bg1"
                      href="https://www.facebook.com/mansour.alzahrani.984"
                      target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebookF}  style={{ color: 'white' , width:"40px"}}  />
                    </a>
                    <a className="social__item bg3">
                        <FontAwesomeIcon icon={faGithub}  style={{ color: 'white' , width:"70px"}}  />
                    </a>   
                      
                    </div >
                </div>
            </div>
             }
            />
        </Section>
    );
});

export default Contact;