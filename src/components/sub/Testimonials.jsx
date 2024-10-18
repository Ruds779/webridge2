function Testimonials() {
  return (
    <>
      <div className="container">
        <div className="container m-5 text-center">
          <h2>CLIENT TESTIMONIALS</h2>
          <h1>What People Say About Us</h1>
        </div>

        {/* <!-- Carousel --> */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* <!-- Indicators/dots --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="d-block text-center"
                style={{ padding: 50, backgroundColor: "#f8f9fa" }}
              >
                <h3>John Doe</h3>
                <p>
                  "This product has changed my life! The quality is outstanding,
                  and the customer service is top-notch."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-block text-center"
                style={{ padding: 50, backgroundColor: "#f8f9fa" }}
              >
                <h3>Jane Smith</h3>
                <p>
                  "I highly recommend this company. They go above and beyond to
                  meet their clients' needs."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-block text-center"
                style={{ padding: 50, backgroundColor: "#f8f9fa" }}
              >
                <h3>Michael Lee</h3>
                <p>
                  "Fantastic service and the product exceeded my expectations!
                  Will definitely be coming back."
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Left and right controls/icons --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
