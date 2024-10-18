import blogData from "../blogposts.json";
import classes from "./Post.module.css";
function Post() {
  return (
    <>
      {blogData.map((post) => (
        <div className=" col-lg-8">
          <div key={post.id} className="card mb-4 p-3">
            <div className="card-header">
              <h5>{post.title}</h5>
            </div>
            <div className="card-body">
              <p>{post.body}</p>
              <div>
                {post.link ? (
                  <a
                    className="btn btn-primary"
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Post;
