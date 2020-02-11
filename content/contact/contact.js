import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import Background from "../../components/background/background";
import Section from "../../components/section/section";
import Content from "../../components/content/content";
import SocialMediaButton from "../../components/social-media-button/social-media-button";
import "./contact.css";


const Contact = withNavigationContext(({ fullpage }) => {
    return (
        <Section wrapper={true} backgroundColor="#292c35">
            <Background src="coding.jpg" />
            <Content
             main={
                <div className="contact__form">
                <di>
                    <h2>Get in touch</h2>
                    <p>
                        If you wanna get in touch,fill up the awesome
                        form below or send an email to mansour.alzahrani@yahoo.com and ~let's talk.
                    </p>
                </di>
                <div className="email__form">
                    <div>
                        <h2>Get in touch</h2>
                
                    </div>
                </div>
                <div className="social__media">
                    <h4>Let's get social</h4>
                    <p>Follow my online fan page on Facebook and profiles on Twitter, GitHub and Linkedin.</p>
                    <SocialMediaButton 
                        link="https://www.facebook.com/mansour.alzahrani.984"
                        media="facebook"
                        />           
                </div>
            </div>
             }
            />
        </Section>
    );
});

export default Contact