import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Background from "../../components/background/background";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import Page from "../../components/page/page";

const Portfolio = withNavigationContext(({ fullpage }) => {
    return (
        <Page >
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
          />
        </Section>
        <Section backgroundColor="#617be3">
        <Content
            main={
              <Lettering
                title="PAGE-TWO"
                text={[
                  "This is multiple section page, scroll down to view more content."
                ]}
              />
            }
          />
        </Section>
      </Page>
    );
  });

export default Portfolio;