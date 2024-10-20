function ContentBelow({ children }) {
  const contentStyle = {
    backgroundColor: "#113358",
    //display: "flex", // Use flexbox to center content
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "100%", // Set height to cover the full viewport (or any preferred height)
    overflow: "hidden",
    padding: "10px",
  };

  return (
    <div style={contentStyle}>
      <div className="row text-white">
        <div className=" col-12">{children}</div>
      </div>
    </div>
  );
}

export default ContentBelow;
