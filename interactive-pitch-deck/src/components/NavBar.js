import "./styles.css";
import NavContentData from "../Content/NavContent";
import { BsFillSquareFill } from "react-icons/bs";
import { useState } from "react";
import courseData from "../Content/AppContent.json";
const NavBar = ({ setSection, section, setIndex, index }) => {
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
        {/* <img className="imageLogo" /> */}
        <span className="heading">LOGO</span>
      </div>
      <div className="NavContent">
        {/* <h3 className="h3Heading">MANAGE</h3> */}
        {courseData.courseSections.map((data, i) => (
          <div className="NavContentSections">
            <div
            // className="NavContentSections"
            // onMouseOver={(e) => handleHover(i)}
            // onMouseOut={(e) => handleMouseOut(i)}
            // style={{
            //   fontWeight:
            //     isHovered == i
            //       ? "800"
            //       : section === data.name
            //       ? "800"
            //       : "100",
            // }}
            // onClick={() => setSection(data.name)}
            >
              {/* <BsFillSquareFill /> */}
              <span className="BoldHeading"> {data.name}</span>
            </div>
            <br></br>
            <div
            // className="NavContentSections"
            // onMouseOver={(e) => handleHover(i)}
            // onMouseOut={(e) => handleMouseOut(i)}
            // style={{
            //   fontWeight:
            //     isHovered == i
            //       ? "800"
            //       : section === data.name
            //       ? "800"
            //       : "100",
            //   fontSize: "14px",
            // }}
            // onClick={() => setSection(data.name)}
            >
              {/* <BsFillSquareFill /> */}
              <span className="BoldHeading"> {data.unit.name}</span>
              {data.unit.sections.map((content, i) => (
                <div
                  style={{
                    fontWeight: "600",
                    marginLeft: "10px",
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    onClick={() => {
                      setIndex(i);
                      setSection(content.name);
                    }}
                    style={{ fontWeight: i === index ? "800" : "600" }}
                  >
                    {content.name}
                  </span>
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
