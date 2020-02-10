import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Section from "../section/section";
import Page from "../page/page";
import About from "../../content/about/about";
import Resume from "../../content/resume/resume";
import "./fullpage.css";


export const media = [
  {
    slug: "",
    children: <About />
  },
  {
    slug: "portfolio",
    children: (
      <Page>
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
          <Lettering
            title="PAGE-SECTION"
            text={["This is a continued page section."]}
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "contact",
    children: <Resume />
  },
  {
    slug: "resume",
    children: <Resume />
  }
];