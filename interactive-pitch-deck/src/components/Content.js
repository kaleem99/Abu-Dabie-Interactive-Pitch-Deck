import BreadCrumbs from "./BreadCrumbs";
import NavigationBackAndNext from "./NavigationBackAndNext";
import courseData from "../Content/AppContent.json";
const Content = ({
  section,
  setSection,
  contentDataSection,
  index,
  setIndex,
}) => {
  const divStyle = {
    width: "78vw",
    height: "90vh",
    border: "1px solid red",
    transform: "scale(0.8)",
    overflow: "hidden", // Hide the overflow to prevent scrolling
    position: "relative", // Ensure the child elements are positioned relative to the div
    top: "0%",
    bottom: "0%",
    margin: "auto",
  };

  const iframeStyle = {
    width: "1200px", // Fixed width of the website
    height: "100%", // Fixed height of the website
    border: "none", // No border to keep consistent with the container
    // transform: "scale(0.8)", // Adjust the scale to fit the container size
  };
  console.log(contentDataSection);
  return (
    <div className="Content">
      <div className="InnerContent">
        {/* <span className="heading">{section}</span> */}
        <BreadCrumbs
          contentDataSection={contentDataSection}
          section={section}
          courseData={courseData}
        />
        <div className="mainInnerContent">
          {contentDataSection.content.map((item, index) => {
            return (
              <div className="innerContentAndHeading">
                <span className="mainInnerContentHeading">{item.name}</span>
                <div className="mainInnerContentData">
                  {item.type === "string" ? (
                    item.data
                  ) : item.type === "array" ? (
                    item.data.map((cont, i) => (
                      <p>
                        {index === 1 && `${i + 1}.`} {cont}
                      </p>
                    ))
                  ) : (
                    <div className="iframeContent">
                      <iframe
                        title="EmbeddedWebsite"
                        src={item.data} // Replace with the URL of the website you want to embed
                        style={iframeStyle}
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NavigationBackAndNext
        setSection={setSection}
        section={section}
        setIndex={setIndex}
        index={index}
        courseData={courseData}
      />
    </div>
  );
};

export default Content;
