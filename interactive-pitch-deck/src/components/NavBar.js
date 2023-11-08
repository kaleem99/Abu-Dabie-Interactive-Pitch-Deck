import "./styles.css";
import NavContentData from "../Content/NavContent";
import { BsFillSquareFill } from "react-icons/bs";
import { useState } from "react";
import courseData from "../Content/AppContent.json";
const NavBar = ({
  setSection,
  section,
  setUnitSection,
  unitSection,
  index,
  setIndex,
}) => {
  const [isHovered, setIsHovered] = useState(null);
  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleMouseOut = (index) => {
    setIsHovered(-1);
  };
  // console.log(courseData.courseSections);
  return (
    <div className="NavBar">
      {/* <div className="ImageAndLogo"> */}
        {/* <span className="heading">LOGO</span> */}
      {/* </div> */}
      <div className="NavContent">
        {courseData.courseSections.map((data, i) => (
          <div className="NavContentSections">
            <div>
              <span className="BoldHeading"> {data.name}</span>
            </div>
            <br></br>
            <div>
              <span className="BoldHeading"> {data.unit.name}</span>
              {data.unit.sections.map((content, i) => (
                <div>
                  <button
                    onClick={() => {
                      // setIndex(i);
                      setIndex(0);
                      setUnitSection(i);
                      setSection(content.name);
                    }}
                    style={{
                      fontWeight: "600",
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      height: "43px",
                      width: "111%",
                      paddingTop: "5px",
                      paddingBottom: "5px",

                      marginLeft: "-7%",
                      border: "none",
                      cursor: "pointer",
                      color: content.name === section ? "white" : "black",
                      fontSize: "14px",
                      background: content.name === section ? "#2546F0" : "none",
                    }}
                  >
                    <span style={{ marginLeft: "5%", width: "90%" }}>{content.name}</span>
                  </button>
                  {content.name === section && (
                    <div>
                      {content.content.map((item, subIndex) => (
                        <button
                          onClick={() => setIndex(subIndex)}
                          style={{
                            fontWeight: "600",
                            marginTop: "12px",
                            display: "flex",
                            alignItems: "center", // Align content vertically
                            textAlign: "left",
                            height: "auto",
                            width: "100%",
                            marginLeft: "5.5%",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            // fontFamily: "noto sans",
                            fontSize: "14px",
                            fontWeight: subIndex === index ? "bolder" : "400",
                            opacity: subIndex === index ? "100%" : "90%",
                          }}
                        >
                          <span style={{width: "95%"}}>{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
