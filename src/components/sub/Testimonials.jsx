import TestimonialPosts from "./TestimonialPosts";

function Testimonials() {
  let num = 0;

  return (
    <>
      <div className="container">
        <div className="container m-5 text-center">
          <h2>CLIENT TESTIMONIALS</h2>
          <h1>What People Say About Us</h1>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <TestimonialPosts index="active" />
        </div>
      </div>
    </>
  );
}
export default Testimonials;
