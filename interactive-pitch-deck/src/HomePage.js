import svgImage from "./Images/Asset 10.svg";
const HomePage = ({ setState }) => {
  return (
    <div className="HomePage">
      {/* <h1>Homepage</h1> */}

      <div className="homepageImage">
        <img width={"100%"} height={"200px"} src={svgImage} />
      </div>
      <button className="standardButton" onClick={() => setState("")}>
        Start
      </button>
    </div>
  );
};

export default HomePage;
