const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2020 - Present</div>
                <div className="name">Web Developer - Fiverr</div>
                <div className="text">
                  Professional Web Developer, Web Designer and Digital Marketer
                </div>
              </div>
              {/* <div className="resume-item content-box">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-End Developer - Google Inc.</div>
                <div className="text">
                  Monitored technical aspects of the front-end delivery for
                  projects.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer - ABC Inc.</div>
                <div className="text">
                  Optimize your website and apps performance using latest
                  technology.
                </div>
              </div> */}
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2016</div>
                <div className="name">Secondary School Certificate - Science</div>
                <div className="text">
                  Blue Bird School And College, Sylhet.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2018</div>
                <div className="name">Higher-Secondary School Certificate - Science</div>
                <div className="text">
                  Jalabad Cantonment Public School And College, Sylhet.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2019 - Present</div>
                <div className="name">B.Sc.(Hons) - Mathematics</div>
                <div className="text">
                  Murari Chand College, Sylhet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
