import { ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Blog</a> / 22 February 2023</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={"What is the MERN stack?"}
        typingData={typingAnimation}
        bannerImg="assets/blogs/blog1.png"
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
                <p>Learning the MERN stack will help you become a full-stack developer. The demand for MERN stack developers is also high. However, it takes time to be a good MERN stack developer. </p>
                <p>The MERN stack is a popular web development stack that consists of four technologies: MongoDB, Express, React, and Node.js.</p>
                <ul>
                  <li>MongoDB is a document-oriented NoSQL database that stores data in JSON-like format.</li>
                  <li>Express is a web application framework for Node.js that provides a set of features for building web applications such as routing, middleware, and templates.</li>
                  <li>React is a JavaScript library for building user interfaces, and its designed to work with the browser, server-side rendering, and mobile applications.</li>
                  <li>Node.js is a JavaScript runtime that enables server-side JavaScript, and its used to build scalable and efficient web applications.</li>
                </ul>
                <p>Together, the MERN stack provides a complete solution for building full-stack web applications, from the server-side to the client-side. MongoDB is used as the database layer, Express provides the server-side logic, React handles the client-side UI, and Node.js is used as the runtime environment for the entire stack.</p>
              </div>

              {/* <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="share-btn share-btn-reddit share-btn-4" title="Share on Reddit">
                    <i className="fab fa-reddit"></i>
                  </a>
                  <a className="share-btn share-btn-pinterest share-btn-5" title="Share on Pinterest">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/categories/design">Design</a>
                  <span className="byline"> / by <span className="author">Ryan Adlard</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">code</a>
                </div>
              </div> */}

            </div>
          </div>

          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" title="Design in Mobile Application"><span className="post-nav-next post-nav-text">Prev</span></a>
              </div>
              <div className="nav-next">
                <a href="#" title="By spite about do of do allow blush"><span className="post-nav-prev post-nav-text">Next</span></a>
              </div>
            </div>
          </nav>

          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;
