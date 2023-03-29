const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: farhanchowdhury1999@gmail.com</p>
        <p>T: +8801796549213</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/itsfarhanchy99/">
            <span className="icon fab fa-facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/itsfarhanchy99/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/farhanchy99/">
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
