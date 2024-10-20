import ContactUsBelow from "../components/ContactUsBelow";
import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";
import RAFFrom from "../components/RAFForm";
import { useState } from "react";
import PropertyFrom from "../components/PropertyForm";
import AttorneyForm from "../components/AttorneyForm";
import classess from "../components/ApplyNow.module.css";
import emailjs from "@emailjs/browser";

function Applynow() {
  const [RafFormIsVisible, setRafFromIsVisible] = useState(true);
  const [PropertyFormIsVisible, setPropertyIsVisible] = useState(false);
  const [AttorneyFormIsVisible, setAttorneyIsVisible] = useState(false);
  const [currentHeading, setHeading] = useState(
    "RAF Bridging Finance Application"
  );
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_u8tlaga",
      "template_n9m23q4",
      e.target,
      "GdAx_D80jyZ88kjtc"
    );
  };

  function showPropertyForm() {
    setPropertyIsVisible(true);
    setHeading("Property Bridging Finance Application");
    setRafFromIsVisible(false);
    setAttorneyIsVisible(false);
  }
  function showRafForm() {
    setRafFromIsVisible(true);
    setHeading("RAF Bridging Finance Application");
    setPropertyIsVisible(false);
    setAttorneyIsVisible(false);
  }
  function showAttorneyForm() {
    setPropertyIsVisible(false);
    setHeading("Attorney Bridging Finance Application");
    setRafFromIsVisible(false);
    setAttorneyIsVisible(true);
  }

  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Apply Now</h2>
      </Head>
      <ContentBelow>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-4 col-md-4">
              <h3>{currentHeading}</h3>
              <p>
                For Property Bridging Finance click
                <button className={classess.button} onClick={showPropertyForm}>
                  here
                </button>
              </p>
              <p>
                For Attorney Finance click
                <button className={classess.button} onClick={showAttorneyForm}>
                  here
                </button>
              </p>
              {!RafFormIsVisible ? (
                <p>
                  For RAF Bridging Finance click
                  <button className={classess.button} onClick={showRafForm}>
                    here
                  </button>
                </p>
              ) : null}
              <p>
                For any other bridging finance requests, please send an email to
                apply@webridge.co.za
              </p>
            </div>
            <div className=" col-sm-6 col-lg-4 col-md-6">
              <form action="" name="test">
                <input type="text" name="to_name" placeholder="To Name" />
                <input type="text" name="from_name" placeholder="From Name" />
                <input type="text" name="message" placeholder="Message" />
                <br />
                <button type="submit" onClick={sendEmail}>
                  Submit
                </button>
              </form>
              {/* {RafFormIsVisible ? <RAFFrom /> : null}
              {PropertyFormIsVisible ? <PropertyFrom /> : null}
              {AttorneyFormIsVisible ? <AttorneyForm /> : null} */}
            </div>
          </div>
        </div>
      </ContentBelow>
      <ContactUsBelow />
    </>
  );
}
export default Applynow;
