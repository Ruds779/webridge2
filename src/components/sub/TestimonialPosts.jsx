import Posts from "./Posts.json";

function TestimonialPosts({ index }) {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel"></div>
      <div className="carousel-inner">
        {Posts.map((post) => (
          <div className={`carousel-item ${index}`}>
            <div
              key={post.id}
              className="d-block text-center"
              style={{ padding: 50, backgroundColor: "#f8f9fa" }}
            >
              <h3>{post.name}</h3>
              <p>{post.post}</p>
            </div>
            {/* <!-- Left and right controls/icons --> */}
            <button
              className="carousel-control-prev"
              style={{ backgroundColor: "blue", width: "40px" }}
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              style={{ backgroundColor: "blue", width: "40px" }}
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialPosts;
