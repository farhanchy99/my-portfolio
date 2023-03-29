import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">My Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Front-End Web Development</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Back-End Web Development</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "65%" }}>
                  <span className="percent">65%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">SEO</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "60%" }}>
                  <span className="percent">60%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Social Media Management</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            {/* <li>
              <div className="name">Bangla</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li> */}
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Hindi</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">React</div>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Express.js</div>
              <div className="progress p75">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">75%</span>
                </div>
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">MongoDb</div>
              <div className="progress p80">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Node.js</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">HTML / CSS</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Javascript</div>
              <div className="progress p90">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">WordPress</div>
              <div className="progress p80">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Redux</div>
              <div className="progress p50">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">50%</span>
                </div>
                <span>50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Knowledge & Technology</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Website hosting</div>
            </li>
            <li>
              <div className="name">Firebase Deploy</div>
            </li>
            <li>
              <div className="name">Vercel Deploy</div>
            </li>
            <li>
              <div className="name">Create logo design</div>
            </li>
            <li>
              <div className="name">Design for print</div>
            </li>
            <li>
              <div className="name">Modern and mobile-responsive</div>
            </li>
            <li>
              <div className="name">Advertising services include</div>
            </li>
            <li>
              <div className="name">Graphics and animations</div>
            </li>
            <li>
              <div className="name">Search engine marketing</div>
            </li>
            <li>
              <div className="name">Use Tailwind CSS And React Bootstrap</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
