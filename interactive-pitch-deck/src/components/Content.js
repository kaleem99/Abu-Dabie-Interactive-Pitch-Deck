import BreadCrumbs from "./BreadCrumbs";
import NavigationBackAndNext from "./NavigationBackAndNext";
import courseData from "../Content/AppContent.json";
import ReflectionTable from "./ReflectionTable";
import ResourceExample from "../PDFs/Resource_example_1.pdf";
import HorizontalCarousel from "./ImageCarousel";
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
  const checkBorderBox = (data) => {
    if (data.style) {
      if (data.style === "border box") {
        return {
          border: "1px solid",
          padding: "10px",
          height: "250px",
          width: "auto",
        };
      } else {
        return { border: "1px solid", padding: "10px 15px 15px 15px" };
      }
    }
    return {};
  };
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
                        style={checkBorderBox(data)}
                        dangerouslySetInnerHTML={{ __html: data.data }}
                      ></p>
                    ) : data.type === "subheading" ? (
                      <h1 className="heading">{data.data}</h1>
                    ) : data.type === "heading" ? (
                      <h1 style={{ fontSize: "40px" }} className="heading">
                        {data.data}
                      </h1>
                    ) : data.type === "array" ? (
                      data.data.map((line) => (
                        <p dangerouslySetInnerHTML={{ __html: line }}></p>
                      ))
                    ) : data.type === "button" ? (
                      <button
                        style={{ float: "right" }}
                        className="standardButton"
                      >
                        {data.data}
                      </button>
                    ) : data.type === "hyperlink" ? (
                      <div style={{ marginTop: "10px" }}>
                        <a href={data.data} target="_blank">
                          {data.name}
                        </a>
                      </div>
                    ) : data.type === "Carousel" ? (
                      <HorizontalCarousel />
                    ) : data.type === "table" ? (
                      <ReflectionTable />
                    ) : data.type === "image" ? (
                      <div style={{ width: "800px", margin: "auto" }}>
                        <img style={{ width: "800px" }} src={data.data} />
                      </div>
                    ) : data.type === "video" ? (
                      <video
                        style={{
                          width: "100%",
                          height: "auto",
                          border: "1px solid",
                        }}
                        autoPlay
                        controls
                      >
                        <source src={data.data} type="video/mp4" />
                      </video>
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
