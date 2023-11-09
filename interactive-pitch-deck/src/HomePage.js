import svgImage from "./Images/Asset 10.svg";
const learningOutcomes = [
  "<b>LO1</b>: Discuss various data sources, and how to prepare them, for different machine learning strategies.",
  "<b>LO2</b>: Determine the appropriate machine learning tools based on the specific requirements of a project or organization.",
  "<b>LO3</b>: Select the relevant teams to develop and deploy the machine learning strategy.",
  "<b>LO4</b>: Assess machine learning outputs to make informed business decisions.",
];
const HomePage = ({ setState }) => {
  return (
    <div className="HomePage">
      {/* <h1>Homepage</h1> */}

      <div className="homepageImage">
        <img width={"100%"} height={"120px"} src={svgImage} />
        {/* <h1 className="homepageHeading">Prototype Pathway</h1> */}
        <div style={{ marginTop: "20px" }}>
          <span className="homepageSubheading">
            Welcome to this prototype course exploring a data- and people-driven
            approach to implement machine learning technologies in any
            organization.<br></br>
            <br></br>
            Click below to explore the learning pathway, a prototype learning
            module featuring three components (including an interactive
            infographic), and additional learning design modalities.
          </span>
        </div>
        <button
        style={{ background: "#1c1d21", marginTop: "30px" }}
        className="standardButton HomePageButton"
        onClick={() => setState("")}
      >
        Proceed
      </button>
      </div>
      {/* <div className="homepageLearningOutcomes">
        <div className="homepageLODiv">
          <span className="homepageLO">Learning outcomes</span>
        </div>

        <div className="homepageLearningOutcomesInnerDiv">
          {learningOutcomes.map((cont) => (
            <p>
              <li dangerouslySetInnerHTML={{ __html: cont }}></li>
            </p>
          ))}
        </div>
      </div> */}
   
    </div>
  );
};
// kaleem99.github.io/hostingContents/Abu%20Dhabi%20interactive%20infographic.html
export default HomePage;
