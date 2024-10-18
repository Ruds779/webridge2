import background from "./images/home_background.png";
import Button from "./components/Button";
import Head from "./components/Head";
import classes from "./App.module.css";
import HowTo from "./components/sub/HowTo";
import AboutImg from "./images/Heading.png";
import Testimonials from "./components/sub/Testimonials";
import ContentBelow from "./components/ContentBelow";

function App() {
  return (
    <>
      <Head imageUrl={background} backgroundAttachment="fixed">
        <div className={`text-start text-sm-left ${classes.heading_div}`}>
          <h2 className={classes.h2}>
            WeBridge: Your solution to advance payments on settled RAF Claims
          </h2>
          <p>Changes</p>
          <p>
            - Settled RAF Claim Bridging Finance <br />
            - Attorney Fee Bridging Finance <br />
            - Property Bridging Finance <br />- Business Growth Finance
          </p>
          <Button name="Apply" link="/Applynow">
            Apply
          </Button>
        </div>
      </Head>
      <ContentBelow>
        <div className="container-fluid text-center m-4 p-2 w-50 mx-auto">
          <p className={classes.did_you_know}>
            Did you know that settled RAF Claim payouts can take longer than 180
            days to pay out?
          </p>
          <p>
            <em>
              No need to wait any longer for your RAF claim payout if your claim
              is settled. Apply today and access the funds you need!
            </em>
          </p>
          <Button name="Apply now" link=""></Button>
        </div>
        <HowTo />
      </ContentBelow>

      <div className={classes.aboutUs}>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-sm-5 col-md-5">
              {/* color h:#347cb6 */}
              <h4>About us</h4>
              <h2>8 Years of Trust and Personalized Service</h2>
              <p>
                For over 8 years, we've been committed to supporting our
                clients' financial well-being with personalized service and
                genuine care. Unlike impersonal call centers, at WeBridge,
                you'll always speak to a real person who understands your needs
                and is dedicated to helping you every step of the way. Your
                peace of mind is our priority, and we’re here to make the
                process as smooth and supportive as possible.
              </p>
              <Button name="More about us" link=""></Button>
            </div>
            <div className="col-sm-5 col-md-5">
              <img src={AboutImg} width={500} className=" img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default App;
