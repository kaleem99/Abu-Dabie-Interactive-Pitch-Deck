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
          index={index}
        />
        <div className="mainInnerContent">
          {/* {contentDataSection.content.map((contentDataSection[index], index) => { */}
          {/* return ( */}
          <div className="innerContentAndHeading">
            {contentDataSection[index].name.length === 2 ? (
              contentDataSection[index].name.map((itemName) => (
                <div>
                  <span className="mainInnerContentHeading">{itemName}</span>
                  <br></br>
                </div>
              ))
            ) : (
              <span className="mainInnerContentHeading">
                {contentDataSection[index].name}
              </span>
            )}

            <div className="mainInnerContentData">
              {contentDataSection[index].type === "string"
                ? contentDataSection[index].data
                : contentDataSection[index].type === "array"
                ? contentDataSection[index].data.map((cont, i) => (
                    <p>
                      {index === 1 && `${i + 1}.`} {cont}
                    </p>
                  ))
                : contentDataSection[index].type === "object"
                ? contentDataSection[index].data.map((data) =>
                    data.type === "string" ? (
                      <p>{data.data}</p>
                    ) : (
                      <div className="iframeContent">
                        <iframe
                          title="EmbeddedWebsite"
                          src={data.data} // Replace with the URL of the website you want to embed
                          style={iframeStyle}
                          allowFullScreen
                        ></iframe>
                      </div>
                    )
                  )
                : ""}
            </div>
          </div>
          {/* ); */}
          {/* })} */}
        </div>
      </div>
      <NavigationBackAndNext
        setSection={setSection}
        section={section}
        setIndex={setIndex}
        index={index}
        courseData={courseData}
        contentDataSection={contentDataSection}
      />
    </div>
  );
};

export default Content;
