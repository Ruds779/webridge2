import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";

function AboutUs() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">About Us</h2>
      </Head>
      <ContentBelow>
        <div className="container">
          <h2>What Makes WeBridge Unique</h2>
        </div>
      </ContentBelow>
    </>
  );
}
export default AboutUs;
