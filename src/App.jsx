import background from "./images/home_background.png";
import Button from "./components/Button";
import Head from "./components/Head";
import ContentBelow from "./components/ContentBelow";
import classes from "./App.module.css";
import StepImage from "./images/4-Steps-WeBridge-1.png";

function App() {
  return (
    <>
      <Head imageUrl={background} backgroundAttachment="fixed">
        <div className={classes.heading_div}>
          <h2 className={classes.h2}>
            WeBridge: Your solution to advance payments on settled RAF Claims
          </h2>
          <p>
            - Settled RAF Claim Bridging Finance <br />
            - Attorney Fee Bridging Finance
            <br />
            - Property Bridging Finance
            <br />- Business Growth Finance
          </p>
          <Button name="Apply">Apply</Button>
        </div>
      </Head>
      <ContentBelow>
        <div className={classes.content}>
          <div style={{ textAlign: "center" }}>
            <h2>
              Did you know that settled RAF Claim payouts can take longer than
              180 days to pay out?
            </h2>

            <p>
              <em>
                <br />
                No need to wait any longer for your RAF claim payout if your
                claim is settled. <br />
                Apply today and access the funds you need.
              </em>
            </p>
            <Button name="Apply" />
          </div>
        </div>
        <div className={classes.how_div}>
          <h1>How does it work</h1>
          <h3>4 easy steps:</h3>
          <div style={{ marginTop: 170 }}>
            <div className={classes["steps-container"]}>
              <div className={classes["step-left-1"]}>
                <div className={classes["step"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className={classes[""]}>
                    <h3>1. Apply</h3>
                    <p>
                      Apply via: <br />
                      <a href="#">Apply Now</a>
                      <br />
                      WhatsApp: <a href="#">063 068 0075</a>
                      <br />
                      Phone: 012 941 9544
                      <br />
                      Email:{" "}
                      <a href="mailto:apply@webridge.co.za">
                        apply@webridge.co.za
                      </a>
                    </p>
                  </div>
                </div>

                <div className={classes["step-1"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-pen"></i>
                  </div>
                  <div className={classes[""]}>
                    <h3>3. Sign Contract</h3>
                    <p>You will sign the agreement and return it to us.</p>
                  </div>
                </div>
              </div>

              <div className={classes["step-line"]}>
                <img src={StepImage} height={650} width={220} />
              </div>

              <div className={classes["step-right"]}>
                <div className={classes["step"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className={classes[""]}>
                    <h3>2. Receive Quote</h3>
                    <p>
                      We will call you to explain how it all works and show you
                      how much money you will get - no hidden fees.
                    </p>
                  </div>
                </div>

                <div className={classes["step-right-2"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div className={classes[""]}>
                    <h3>4. Payout</h3>
                    <p>Receive money in your account within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentBelow>

      <div className={classes.aboutUs}>
        <div className="container">
          <h4>About us</h4>
          <h2>8 Years of Trust and Personalized Service</h2>
          <p>
            For over 8 years, we've been committed to supporting our clients'
            financial well-being with personalized service and genuine care.
            Unlike impersonal call centers, at WeBridge, you'll always speak to
            a real person who understands your needs and is dedicated to helping
            you every step of the way. Your peace of mind is our priority, and
            we’re here to make the process as smooth and supportive as possible.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
