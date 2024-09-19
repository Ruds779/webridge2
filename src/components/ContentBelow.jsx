function ContentBelow({ children }) {
  const contentStyle = {
    backgroundColor: "#113358",
    color: "white",
    height: "100%",
    margin: "0px",
    padding: "0px",
    overflow: "hidden",
  };
  return (
    <>
      <div style={contentStyle}>
        <div className="container p-3 my-1 text-white">{children}</div>
      </div>
    </>
  );
}
export default ContentBelow;
