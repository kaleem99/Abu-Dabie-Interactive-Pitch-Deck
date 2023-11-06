import "./styles.css";
import NavContentData from "../Content/NavContent";
import { BsFillSquareFill } from "react-icons/bs";
import { useState } from "react";

const NavBar = ({ setSection, section }) => {
  const [isHovered, setIsHovered] = useState(null);
  const handleHover = (index) => {
    setIsHovered(index);
  };

  const handleMouseOut = (index) => {
    setIsHovered(-1);
  };

  return (
    <div className="NavBar">
      <div className="ImageAndLogo">
        <img className="imageLogo" />
        <span className="heading">LOGO</span>
        <hr></hr>
      </div>
      <div className="NavContent">
        <h3 className="h3Heading">MANAGE</h3>
        {NavContentData.map((data, i) => (
          <button
            className="NavContentSections"
            onMouseOver={(e) => handleHover(i)}
            onMouseOut={(e) => handleMouseOut(i)}
            style={{
              color:
                isHovered == i
                  ? "#2546f0"
                  : section === data.name
                  ? "#2546f0"
                  : "black",
            }}
            onClick={() => setSection(data.name)}
          >
            <BsFillSquareFill />
            <span> {data.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
