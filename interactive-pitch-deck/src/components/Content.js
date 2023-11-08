import BreadCrumbs from "./BreadCrumbs";
import NavigationBackAndNext from "./NavigationBackAndNext";
import courseData from "../Content/AppContent.json";
const Content = ({
  section,
  setSection,
  contentDataSection,
  index,
  setIndex,
  unitSection,
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

              {unitSection === 1 && (
                <table
                  style={{
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  cellSpacing="0"
                  cellPadding="5"
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#2546f0",
                          color: "#ffffff",
                          width: "50%",
                          borderRight: "1px solid #FFFFFF",
                        }}
                      >
                        Technical requirements
                      </td>
                      <td
                        style={{
                          backgroundColor: "#2546f0",
                          color: "#ffffff",
                          width: "50%",
                          borderLeft: "1px solid #FFFFFF",
                        }}
                      >
                        Stakeholders and how to achieve buy-in
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Define the objective/s of your machine learning project.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Establish your data requirements and how data will be
                        accessed.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Establish how the acquired data will be processed.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Decide on which machine learning tool will be employed.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Outline the human resources requirements for the
                        project.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e7ecef",
                          width: "91.3136%",
                        }}
                        colSpan="2"
                      >
                        Outline how the output of this project will be used to
                        inform business decisions.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          width: "50%",
                          borderRight: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                      <td
                        style={{
                          width: "50%",
                          borderLeft: "1px solid #E7ECEF",
                        }}
                      >
                        {" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
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
