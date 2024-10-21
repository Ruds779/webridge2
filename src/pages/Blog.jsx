import ContentBelow from "../components/ContentBelow";
import Head from "../components/Head";
import background from "../images/services_background.png";
import PostList from "./PostList";

function Blog() {
  return (
    <>
      <Head imageUrl={background}>
        <h2 className="heading_space">Blog</h2>
      </Head>
      <ContentBelow>
        <div className="container col-12 col-md-9 col-lg-6">
          <h5>
            Stay updated with the latest insights, news, and expert tips from
            our blog, designed to help you navigate the world of RAF claims and
            legal financing.
          </h5>
          <br />
          <PostList />
        </div>
      </ContentBelow>
    </>
  );
}
export default Blog;
