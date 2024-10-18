function ContentBelow({ children }) {
  const contentStyle = {
    backgroundColor: "#113358",
    display: "flex", // Use flexbox to center content
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    //height: "100vh", // Set height to cover the full viewport (or any preferred height)
    overflow: "hidden",
  };

  return (
    <div style={contentStyle}>
      <div className="container-fluid m-4 p-2 mx-auto text-white">
        {children}
      </div>
    </div>
  );
}

export default ContentBelow;
