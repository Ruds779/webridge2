import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";
import classes from "../components/AboutUs.module.css";
import Teamcards from "../components/sub/Teamcards";

function AboutUs() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">About Us</h2>
      </Head>
      <ContentBelow>
        <div className="container-lg d-flex flex-column justify-content-center align-items-center text-center">
          <div className=" col-md-6 col-lg-9 col-sm-4 m-4">
            <h2 className={classes.h2}>What Makes WeBridge Unique</h2>
            <p className={classes.p}>
              With WeBridge, you're not just another customer – you're part of
              our community. We pride ourselves on our personalized approach to
              customer service, ensuring that you feel supported and valued
              every step of the way. Our team is always on hand to answer any
              questions you may have and provide assistance whenever you need
              it.
            </p>
          </div>

          {/* background */}
          <div className={classes["background-div"]}></div>
          {/* Blocks */}
          <div className={classes["blocks-over"]}>
            <div class="row justify-content-center">
              {/* <!-- First card --> */}
              <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                <div className={classes["info-card"]}>
                  <i className={`bi bi-bullseye ${classes["info-icon"]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-bullseye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                      <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                  </i>
                  <h3>Our Mission</h3>
                  <p className="p">
                    Our journey began with a simple mission: To make a
                    difference in the lives of road accident victims.
                  </p>
                </div>
              </div>
              {/* <!-- Second card --> */}
              <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                <div className={classes["info-card"]}>
                  <i className={`bi bi-bullseye ${classes["info-icon"]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-eye-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                  </i>
                  <h3>Our Vision</h3>
                  <p className="p">
                    We empower our clients to fulfill their dreams and enable
                    professionals to help more people do the same.
                  </p>
                </div>
              </div>
              {/* <!-- Third card --> */}
              <div class="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
                <div className={classes["info-card"]}>
                  <i className={`bi bi-bullseye ${classes["info-icon"]}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-bag-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                    </svg>
                  </i>
                  <h3>Our Values</h3>
                  <p className="p">
                    We created a sustainable business through responsible
                    financing, keeping our clients’ best interests at heart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row text-center">
            {/* First column */}
            <div className="col-12 col-md-4 mb-4">
              <div className="p-3 border rounded shadow-sm bg-light">
                <div className="row">
                  <div
                    className="col-4"
                    style={{ borderRight: "5px solid black" }}
                  >
                    <h1 className={classes.h1_info_block}>8</h1>
                  </div>
                  <div className="col-6">
                    <h5 className={classes.h5_info_block}>Years in Business</h5>
                    <p className="text-muted">under the same management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="col-12 col-md-4 mb-4">
              <div className="p-3 border rounded shadow-sm bg-light">
                <div className="row">
                  <div
                    className="col-5"
                    style={{ borderRight: "5px solid black" }}
                  >
                    <h1 className={classes.h1_info_block}>200</h1>
                  </div>
                  <div className="col-6">
                    <h5 className={classes.h5_info_block}>Serviced Clients</h5>
                    <p className="text-muted">with zero open complaints</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third column */}
            <div className="col-12 col-md-4 mb-4">
              <div className="p-3 border rounded shadow-sm bg-light">
                <div className="row">
                  <div
                    className="col-4"
                    style={{ borderRight: "5px solid black" }}
                  >
                    <h1 className={classes.h1_info_block}>90</h1>
                  </div>
                  <div className="col-6">
                    <h5 className={classes.h5_info_block}>Trusted Attorneys</h5>
                    <p className="text-muted">
                      that we regularly do business with
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentBelow>
      <div className="container text-lg-center p-4">
        <h2 className={classes.h2_meet_team}>Meet The Team</h2>
        <p>
          Our team consists of highly experienced individuals with a passion for
          finance and our clients.
        </p>
        <div className="container w-75">
          <Teamcards />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
