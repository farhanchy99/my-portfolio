import { DefaultPageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const Blog = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Blog</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Blog"} typingData={typingAnimation} />

      <div className="section blog">
        <div className="content">

          <div className="title"><div className="title_inner">Latest Posts</div></div>

          <div className="blog-items">

            <div className="blog-col">
                <div className="blog-item content-box">
                    <div className="post">
                        <div className="image">
                            <Link href="/blog_post"><a className="post-thumbnail">

                                <img src="assets/blogs/blog1.png" className="wp-post-image" alt="Two Before Arrow Not Relied" />

                                <span className="info">
                                    <span className="centrize full-width">
                                        <span className="vertical-center">
                                            <span className="icon fas fa-plus"></span>
                                        </span>
                                    </span>
                                </span>
                            </a></Link>
                        </div>
                        <div className="desc">
                            <div className="date">
                                22 February 2023
                            </div>
                            <Link href="/blog_post"><a className="name">What is the MERN stack?</a></Link>
                            <div className="single-post-text">
                                <p>Learning the MERN stack will help you become a full-stack developer. The demand for MERN stack developers is also high. However, it takes time to be a good MERN stack developer.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>

          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">

              {/* <div id="search" className="widget widget_search">
                  <form className="search-form" method="GET">
                      <div className="search-form-label">
                          <input type="search" className="search-field" id="search-input" placeholder="Search ..." value="" />
                          <input type="submit" className="search-submit" value="Search ..." />
                      </div>
                      <ul id="results-container"></ul>
                  </form>
              </div> */}

              <section className="widget widget_recent_entries">
                  <h2 className="widget-title">Latest Posts</h2>
                  <ul>

                      <li>
                          <a href="blog_post">What is the MERN Stack</a>
                      </li>

                  </ul>
              </section>

              {/* <section className="widget widget_categories">
                  <h2 className="widget-title">Categories</h2>
                  <ul>

                    <li><a href="#">Design</a> <small>(2)</small></li>

                    <li><a href="#">Mobile</a> <small>(1)</small></li>

                    <li><a href="#">Music</a> <small>(2)</small></li>

                    <li><a href="#">Video</a> <small>(1)</small></li>

                  </ul>
              </section> */}

              {/* <section className="widget widget_tags">

                  <h2 className="widget-title">Tags</h2>

                  <div className="tags">
                    <a href="#">jekyll</a>
                    <a href="#">app</a>
                    <a href="#">mobile</a>
                    <a href="#">code</a>
                    <a href="#">rock</a>
                    <a href="#">Jekyll</a>
                  </div>

              </section> */}

            </aside>
          </div>

          <div className="clear"></div>

        </div>
      </div>

    </Layout>
  );
};
export default Blog;
