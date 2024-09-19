import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";

function Applynow() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Apply Now</h2>
      </Head>
      <ContentBelow>
        <div className="container">
          <h3>form</h3>
        </div>
      </ContentBelow>
    </>
  );
}
export default Applynow;
