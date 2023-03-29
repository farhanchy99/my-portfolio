const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-paint-brush" />
              </div>
              <div className="name">Drawing and paint</div>
              <div className="text">
                I love to drawing and explore new design.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-campground" />
              </div>
              <div className="name">Travel</div>
              <div className="text">
                It makes me so thrilled to explore new places..
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">Gaming</div>
              <div className="text">
                In leisure time, my friend is Games.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-headphones" />
              </div>
              <div className="name">Music</div>
              <div className="text">
                Love to hear music. It makes me feel free to exhausted.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
