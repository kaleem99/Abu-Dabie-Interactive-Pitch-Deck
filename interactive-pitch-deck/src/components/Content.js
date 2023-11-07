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
    width: "1216px", // Adjusted to occupy the div's scaled width
    height: "790px", // Adjusted to occupy the div's scaled height
    border: "none",
    position: "absolute", // Position the iframe within the div
    top: "0",
    left: "0",
    transform: "scale(0.8)", // Reverse the parent div's scale to maintain the iframe's original size
    // transformOrigin: "0 0", // Set the transform origin to the top left
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
                  {item.type === "string"
                    ? item.data
                    : item.data.map((cont, i) => (
                        <p>
                          {index === 1 && `${i + 1}.`} {cont}
                        </p>
                      ))}
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
      />
    </div>
  );
};

export default Content;
