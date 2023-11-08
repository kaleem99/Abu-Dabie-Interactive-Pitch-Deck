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
      <div className="ImageAndLogo">
        <span className="heading">LOGO</span>
      </div>
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
                      setUnitSection(i);
                      setSection(content.name);
                    }}
                    style={{
                      fontWeight: "600",
                      marginTop: "20px",
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                      height: "40px",
                      width: "111%",
                      marginLeft: "-5.5%",
                      border: "none",
                      cursor: "pointer",
                      color: content.name === section ? "white" : "black",

                      background: content.name === section ? "#2546F0" : "none",
                    }}
                  >
                    <span style={{ marginLeft: "5%" }}>{content.name}</span>
                  </button>
                  {content.name === section && (
                    <div>
                      {content.content.map((item, subIndex) => (
                        <button
                          style={{
                            fontWeight: "600",
                            marginTop: "0px",
                            display: "flex",
                            alignItems: "center", // Align content vertically
                            textAlign: "left",
                            height: "40px",
                            width: "85%",
                            marginLeft: "7.5%",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontWeight: subIndex === index ? "bolder" : "400",
                          }}
                        >
                          {item.name}
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
