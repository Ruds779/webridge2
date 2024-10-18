import Head from "./Head";
import background from "../images/services_background.png";

function Careers() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Careers</h2>
      </Head>
      <div className=" container text-center mt-4">
        <h1>Available positions</h1>

        <p>
          There are currently no positions available at WeBridge. Make sure you
          follow our social media pages to keep updated on the latest industry
          news and career postings.
        </p>
      </div>
    </>
  );
}
export default Careers;
