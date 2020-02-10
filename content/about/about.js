
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Background from "../../components/background/background";
import Content from "../../components/content/content";
import Section from "../../components/section/section";

const About = withNavigationContext(({ fullpage }) => {
    return (
      <Section wrapper={true} backgroundColor="#292c35">
        <Background src="coding.jpg" />
        <Content
          main={
            <Lettering
              title="Welcome To Mansour Portfolio"
              text={[
                "Full Stack Developer familiar with a wide range of programming languages.",
                "Collaborative team player with excellent technical abilities.",
                "Able to handle any part of the process with ease.",
                "offering 2 years of related experience."
              ]}
            />
          }
        />
      </Section>
    );
  });

export default About