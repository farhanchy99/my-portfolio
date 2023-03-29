const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="assets/me2.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
        <h1 style={{ color:"#ffffff"}}>About Me</h1>
          <p>
          Hello! My name is Farhan Anjum Chowdhury. I am a MERN Stack Developer, Web Designer and Digital Marketing expert. I have build more than 100+ projects. Also I have 5 years experienced with MERN. Also I am professional on Front-end development and comfort Back-end development. I want to challenge my knowledge, talents, and abilities as a web developer to ensure both my personal and professional progress in web development. JavaScript, HTML, CSS, Node JS, Express JS, and MongoDB are all languages that I have worked with before. In my most recent projects, I developed websites through the use of these skills. Building intuitive, user-friendly websites is something I am passionate about.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 24
              </li>
              <li>
                <strong>Residence:</strong> Bangladesh
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> 22, Chandantula, Amberkhana, Sylhet
              </li>
              <li>
                <strong>Phone:</strong> +880197549213
              </li>
              <li>
                <strong>E-mail:</strong> farhanchowdhury1999@gmail.com
              </li>
            </ul>
          </div>
          <div className="resume_cv">
            <div className="bts">
              <a href="assets/Farhan Anjum Chowdhury.pdf" download="assets/Farhan Anjum Chowdhury.pdf" className="btn hover-animated">
                <span className="circle" />
                <span className="lnk">Download CV</span>
              </a>
            </div>

            <div className="bts">
              <a href="assets/Farhan_Anjum_Chowdhury(MERN).pdf" download="assets/Farhan_Anjum_Chowdhury(MERN).pdf" className="btn hover-animated">
                <span className="circle" />
                <span className="lnk">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
