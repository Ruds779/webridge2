import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";

function Services() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Services</h2>
      </Head>
      <ContentBelow>
        <div className="container-lg p-lg-5">
          <h2>Bridging Finance Solutions</h2>
          <p>
            We offer comprehensive bridging finance solutions across multiple
            industries
          </p>
        </div>
      </ContentBelow>
    </>
  );
}

export default Services;
