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
  setState,
  setBar,
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
      <button
        onClick={() => setBar(false)}
        style={{
          float: "right",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        // onMouseOver={(e) => e.target.style.scale = "1.1"}
        // onMouseOut={(e) => e.target.style.scale = "1"}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <g clip-path="url(#clip0_199_11)">
            <path
              d="M31.69 16.06L16.06 31.69"
              stroke="#1B1B1B"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M16.06 16.06L31.69 31.69"
              stroke="#1B1B1B"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_199_11">
              <rect width="47.75" height="47.75" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="NavContent">
        {courseData.courseSections.map((data, i) => (
          <div className="NavContentSections">
            <div>
              <span className="BoldHeading" onClick={() => setState("Home")}>
                {" "}
                {data.name}
              </span>
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
                    <span style={{ marginLeft: "5%", width: "90%" }}>
                      {content.name}
                    </span>
                  </button>
                  {content.name === section && (
                    <div>
                      {content.content.map(
                        (item, subIndex) =>
                          item.name !== "" && (
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
                                fontWeight:
                                  subIndex === index ? "bolder" : "400",
                                opacity: subIndex === index ? "100%" : "90%",
                              }}
                            >
                              <span style={{ width: "95%" }}>{item.name}</span>
                            </button>
                          )
                      )}
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
