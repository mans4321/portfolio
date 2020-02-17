import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import Page from "../../components/page/page";
import Mouse from "../../components/mouse/mouse";
import Lettering from "../../components/lettering/lettering";
import Background from "../../components/background/background";

import "./portfolio.css";

const Portfolio = withNavigationContext(({ fullpage }) => {


  function getProjects(){
    const arr = [];

    arr.push({
      title: "Compiler Design",
      imgSrc: "compiler.jpeg",
      desc: "Translates programs written in a high level language with a given lexical specifications, Grammar, and Semantic into a Assembly language",
      link: "https://github.com/mans-code/CompilerDesign",
      linkDes: "Visit The Source Code"
    });

    arr.push({
      title: "Job Search Engine",
      imgSrc: "jobSearch.jpeg",
      desc: "An advance Job Search Engine that enable its users to retrieve Jobs Opportunities that Matchs their Skills.",
      link: "https://jobhunteengine.firebaseapp.com/",
      linkDes: "Visit The Website"
    });

     return arr;
  }

  const arr = getProjects();


    return (
        <Page >
          { arr.map((project, index, arr) => (
              <Section key={index} wrapper={false} backgroundColor="#292c35">
                <Background src={project.imgSrc} />
                <Content
                  main={
                        <div className="project">
                          <div className="window">
                            <div className="title__bar">
                              <div className="buttons">
                                <div className="close">
                                  <a className="close__button" href="#"></a>
                                </div>
                                <div className="minimize">
                                  <a className="minimize__button" href="#"></a>
                                </div>
                                <div className="zoom">
                                  <a className="zoom__button" href="#"></a>
                                </div>
                              </div>
                                <h4>{project.title}</h4>
                            </div>
                            <div className="window__content">
                              <Lettering 
                                color = "green"
                                title={project.title}
                                text={
                                  [project.desc]
                                }
                              />
                            </div>
                            <div className="project__link">
                              <a 
                                href={project.link}
                                target="_blank">
                                  <button>{project.linkDes}</button>
                                
                              </a> 
                          </div>
                          </div>
                    </div>

                }
                action={index + 1 === arr.length? null : < Mouse />}
                />
            </Section>
          )
          )}
          
      </Page>
    );
  });


export default Portfolio;