import BreadCrumbs from "./BreadCrumbs";
import NavigationBackAndNext from "./NavigationBackAndNext";
import courseData from "../Content/AppContent.json";
import ReflectionTable from "./ReflectionTable";
const Content = ({
  section,
  setSection,
  contentDataSection,
  index,
  setIndex,
  unitSection,
  navBar,
}) => {
  const iframeStyle = {
    width: "100%", // Fixed width of the website
    maxHeight: "700px", // Fixed height of the website
    height: "600px",
    border: "none", // No border to keep consistent with the container
    // transform: "scale(0.8)", // Adjust the scale to fit the container size
  };
  console.log(contentDataSection);
  return (
    <div className="Content" style={!navBar ? { width: "100%" } : {}}>
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
              contentDataSection[index].name.map((itemName, i) => (
                <div>
                  <span
                    style={i === 1 ? { fontSize: "31px" } : {}}
                    className="mainInnerContentHeading"
                  >
                    {itemName}
                  </span>
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
                ? contentDataSection[index].data.map((cont, i) => <p>{cont}</p>)
                : contentDataSection[index].type === "object"
                ? contentDataSection[index].data.map((data, i) =>
                    data.type === "string" ? (
                      <p
                        style={
                          data.style
                            ? { border: "1px solid", padding: "10px" }
                            : {}
                        }
                      >
                        {data.data}
                      </p>
                    ) : data.type === "heading" ? (
                      <h1 className="heading">{data.data}</h1>
                    ) : data.type === "array" ? (
                      data.data.map((line) => (
                        <p dangerouslySetInnerHTML={{ __html: line }}></p>
                      ))
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

              {unitSection === 1 && <ReflectionTable />}
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
