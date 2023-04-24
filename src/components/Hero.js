import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <section class="intro_section page_mainslider ls ms h-50">
        <div class="flexslider" data-nav="false">
          <ul class="slides">
            <li>
              <img
                id="mainImage"
                src="./images/truck-boxes-arrangement.jpg"
                alt=""
              />
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="slide_description_wrapper">
                      <div class="slide_description">
                        <div class="intro-layer" data-animation="fadeInUp">
                          <h3 style={{ color: "#000" }}>
                            Over
                            <span class="highlight">600</span> Reviews
                          </h3>
                          <h2 style={{ color: "#000" }}>Five Stars</h2>
                        </div>
                        <div class="intro-layer" data-animation="fadeInUp">
                          <p class="grey" style={{ color: "#000" }}>
                            <span class="bold">Trans23 Company</span> is a local
                            moving company with experts and professionals, who
                            cater to customer needs with safety, care and love.
                            Call us now:
                            <span class="bold">01 123 456 789</span>
                          </p>
                        </div>
                        {/* <div class="intro-layer" data-animation="fadeInUp">
                          <div
                            style={{ marginTop: "27px" }}
                            className="d-flex justify-content-left mt-4 "
                          >
                            <button
                              id="appleapp"
                              type="button"
                              className=" py-3  text-white  ms-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                marginRight: "20px",
                                padding: "10px 41px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <BsApple
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />{" "}
                              app store
                            </button>

                            <button
                              type="button"
                              className="  py-3  text-white  mr-4"
                              style={{
                                alignItems: "center",

                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <FaGooglePlay
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              google-play
                            </button>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="" style={{ color: "#000" }}>
              <img id="mainImage" src="./images/b-2.jpg" alt="" />
              <div class="container">
                <div class="row">
                  <div class="col-sm-12 text-right">
                    <div class="slide_description_wrapper">
                      <div class="slide_description text-left">
                        <div class="intro-layer" data-animation="fadeInUp">
                          <h3 style={{ color: "#000" }}>Find out why we're</h3>
                          <h2 style={{ color: "#000" }}>
                            <span class="highlight">#1</span> Moving
                          </h2>
                        </div>
                        <div class="intro-layer" data-animation="fadeInUp">
                          <p class="grey" style={{ color: "#000" }}>
                            <span class="bold">Trans23 Company</span> is a local
                            moving company with experts and professionals, who
                            cater to customer needs with safety, care and love.
                            Call us now:
                            <span class="bold">01 123 456 789</span>
                          </p>
                        </div>
                        {/* <div class="intro-layer" data-animation="fadeInUp">
                          <div
                            style={{ marginTop: "27px" }}
                            className="d-flex justify-content-left mt-4 "
                          >
                            <button
                              id="appleapp"
                              type="button"
                              className=" py-3  text-white  ms-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",
                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                marginRight: "20px",
                                padding: "10px 41px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <BsApple
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />{" "}
                              app store
                            </button>

                            <button
                              id="Gplay"
                              type="button"
                              className="  py-3  text-white  mr-4"
                              style={{
                                // display: "flex",
                                alignItems: "center",

                                height: "43px",
                                background:
                                  "linear-gradient(90deg, rgb(57, 120, 162), rgb(95, 203, 232))",
                                border: "none",
                                padding: "10px 35px",
                                fontSize: "14px",
                                borderRadius: "25px",
                              }}
                            >
                              <FaGooglePlay
                                style={{ marginRight: "10px" }}
                                className="mr-2"
                              />
                              google-play
                            </button>
                          </div>
                        </div> */}
                      </div>
                      {/* <!-- eof .slide_description --> */}
                    </div>
                    {/* <!-- eof .slide_description_wrapper --> */}
                  </div>
                  {/* <!-- eof .col-* --> */}
                </div>
                {/* <!-- eof .row --> */}
              </div>
              {/* <!-- eof .container --> */}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
