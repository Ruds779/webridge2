import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import classes from "../components/Contact.module.css";
import background from "../images/services_background.png";

function Contact() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Contact Us</h2>
      </Head>
      <div className={classes.whiteDiv}>
        <div>
          <h3>Contact Us</h3>
          <p>
            Use the details below to reach us, or alternatively apply for
            bridging finance through the online form
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
