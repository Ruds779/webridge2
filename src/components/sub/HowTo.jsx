import Button from "../Button";
import ContentBelow from "../ContentBelow";
import classes from "../../App.module.css";
import StepImage from "../../images/4-Steps-WeBridge-1.png";

function HowTo() {
  return (
    <>
      <div className="container-fluid w-50 text-center m-5 p-2 mx-auto">
        <div className={classes.how_div}>
          <h1>How does it work</h1>
          <h3>4 easy steps:</h3>
          <div style={{ marginTop: 170 }}>
            <div className={`row ${classes["steps-container"]}`}>
              {/* Left steps */}
              <div className="col-lg-5 col-md-6">
                <div className={classes["step"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3>1. Apply</h3>
                    <div>
                      Apply via: <br />
                      <a href="#">Apply Now</a>
                      <br />
                      <p>
                        WhatsApp:{" "}
                        <a className={classes.a} href="#">
                          063 068 0075
                        </a>
                      </p>
                      <p>Phone: 012 941 9544</p>
                      Email:{" "}
                      <a
                        className={classes.a}
                        href="mailto:apply@webridge.co.za"
                      >
                        apply@webridge.co.za
                      </a>
                    </div>
                  </div>
                </div>

                <div className={classes["step-3"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-pen"></i>
                  </div>
                  <div>
                    <h3>3. Sign Contract</h3>
                    <p>You will sign the agreement and return it to us.</p>
                  </div>
                </div>
              </div>

              {/* Middle image */}
              <div className="col-lg-2 d-none d-lg-block">
                <img
                  src={StepImage}
                  height={650}
                  width={220}
                  alt="Step Diagram"
                />
              </div>

              {/* Right steps */}
              <div className="col-lg-5 col-md-6">
                <div className={classes["step-right-2"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div>
                    <h3>2. Receive Quote</h3>
                    <p>
                      We will call you to explain how it all works and show you
                      how much money you will get - no hidden fees.
                    </p>
                  </div>
                </div>

                <div className={classes["step-4"]}>
                  <div className={classes["icon"]}>
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <div>
                    <h3>4. Payout</h3>
                    <p>Receive money in your account within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HowTo;
