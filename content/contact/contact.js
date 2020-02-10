import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Background from "../../components/background/background";
import Content from "../../components/content/content";
import Section from "../../components/section/section";

const Contact = withNavigationContext(({ fullpage }) => {
    return (
      <Section wrapper={true} backgroundColor="#292c35">
        <Background src="coding.jpg" />
        <Content
          main={
            <Lettering
              title="Welcome To Mansour Portfolio"
              text={[
                "Full Stack Developer familiar with a wide range of programming languages.",
              ]}
            />
          }
        />
      </Section>
    );
  });

export default Contact