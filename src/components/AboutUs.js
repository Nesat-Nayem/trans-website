import React from "react";
import logo from "./images/logo.png";
import "./about-us.css";
const AboutUs = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo d-flex ">
            <img src={logo} alt="logo" />
          </a>
        </nav>
      </div>
      <div className="about py-5">
        <div>
          <section
            id="about"
            class="ls ms page_about background_cover section_padding_top_130 columns_margin_bottom_30"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="media_heading">
                    <div class="media-left media-middle text-uppercase highlight ">
                      Hi
                    </div>

                    <div class="media-body media-middle">
                      <h4 class="thin bottommargin_0 text-uppercase p2">
                        Welcome to the
                      </h4>
                      <h2
                        class="section_header big cImagecontainer"
                        style={{ fontSize: "50px" }}
                      >
                        Best Movers
                      </h2>
                    </div>
                    <span class="line"></span>
                  </div>
                  <p class="fontsize_20 grey">
                    You may see many moving companies, so why choose us?
                    <br />
                    Let us tell you our special features...
                  </p>

                  <p>
                    <strong>Trans23</strong> located in San Diego; one of the
                    major cities of California. We are a one-stop solution to
                    all your moving problems. From packing to relocating, we
                    offer all that you have in mind when you think of moving.
                  </p>

                  <ul
                    class="list2 grey checklist "
                    style={{ marginBottom: "5rem" }}
                  >
                    <li>Your requirement is our wish</li>
                    <li>Moving is quick and easy</li>
                    <li>We are affordable</li>
                  </ul>

                  {/* <p>
                <a href="about.html" class="theme_button color1 inverse">
                  about us
                </a>
              </p> */}

                  <a href="#" class="cta">
                    <span>About Us</span>
                    {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg> */}
                  </a>
                </div>

                <div class="col-md-6 text-center bottommargin_0">
                  <div className="cImagecontainer ">
                    <img src="https://i.ibb.co/Z1kkZJs/change.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
