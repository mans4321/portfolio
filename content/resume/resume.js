import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Background from "../../components/background/background";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import AwesomeSlider from 'react-awesome-slider';
import './resume.css';


const animation = `cubeAnimation`;

const Resume = withNavigationContext(({ fullpage }) => {
    return (
      <Section wrapper={false} backgroundColor="#292c35">
        <Background src="coding.jpg" />
        <Content
          main={
            <Section wrapper={false} backgroundColor="#292c35">
                <Background src="coding.jpg" />
                <Content
                main={
                    <AwesomeSlider
                    className={"resume__slider"}
                    startupDelay={275}
                    animation={animation}
                    bullets={true}
                    >
                        <div className="resume__content">
                            <h4>SUMMARY:</h4>
                            <p>
                                Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages.
                                Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease. 
                                Collaborative team player with excellent technical abilities offering 2 years of related experience.
                            </p>
                        </div>
                       
                        <div className="resume__content">
                            <h4>PROFILE:</h4>
                            <ul>
                                <li>Working experience in Java EE, Spring, Servlets, and JSP.</li>
                                <li>Working experience in Oracle databases & REST</li>
                                <li>Working experience on HTML5, CSS, JavaScript, Angular.</li>
                                <li>Strong knowledge of Linux/Unix commands.</li>
                            </ul>
                        </div>

                        <div className="resume__content">
                            <h4>SKILLS:</h4>
                            <p><strong>Programming Language:</strong> Java, JavaScript, React, and NodeJS.</p>
                            <p><strong>Database:</strong> SQL, NO-SQL, MySQL, Oracle, and MongoDB.</p>
                            <p><strong>Framework:</strong> Spring, Hibernate, Selenium, Mockito, Hadoop, Redux, and ExpressJS.</p>
                            <p><strong>Software Development:</strong> Jenkins, Git, REST, Webpack, Docker, AWS and JIRA.</p>
                        </div>

                        <div className="resume__content">
                        </div>
                    </AwesomeSlider>
                }
                />
            </Section>
          }
        />
        </Section>
    );
  });
  
export default Resume;