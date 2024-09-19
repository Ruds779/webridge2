import classes from "./Head.module.css";

function Head({ children, imageUrl, backgroundAttachment }) {
  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: `${backgroundAttachment}`,
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "cover",
    // padding: "50px 0 63px",
    width: "100%",
    height: "100%",
  };
  const overLay = {
    position: "relative",
    height: "100%",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)" /* Semi-transparent overlay */,
  };

  return (
    <main className={classes.main}>
      <div style={sectionStyle}>
        <div style={overLay}>
          <div className={classes.div}>{children}</div>
        </div>
      </div>
    </main>
  );
}

export default Head;
