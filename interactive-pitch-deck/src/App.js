import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useState } from "react";
import NavContentData from "./Content/NavContent";
import courseData from "./Content/AppContent.json";
import HomePage from "./HomePage";
import { RiMenuLine } from "react-icons/ri";
import TopNavBar from "./components/TopNavBar";

function App() {
  const [state, setState] = useState("Home");
  const [index, setIndex] = useState(0);
  const [navBar, setBar] = useState(true);
  const [unitSection, setUnitSection] = useState(0);
  const [section, setSection] = useState(
    courseData.courseSections[0].unit.sections[unitSection].name
  );
  const contentDataSection =
    courseData.courseSections[0].unit.sections[unitSection].content;
  console.log(contentDataSection);
  return (
    <div className="App">
      {state === "" && <TopNavBar setState={setState} />}
      <div className="AppContent">
        {state === "Home" ? (
          <HomePage setState={setState} />
        ) : (
          <>
            {navBar ? (
              <NavBar
                index={index}
                setIndex={setIndex}
                section={section}
                setSection={setSection}
                setUnitSection={setUnitSection}
                unitSection={unitSection}
                setState={setState}
                setBar={setBar}
                navBar={navBar}
              />
            ) : (
              <button
                onClick={() => setBar(true)}
                style={{
                  width: "50px",
                  height: "52px",
                  fontSize: "40px",
                  position: "absolute",
                  left: 12,
                  top: 50,
                  border: "none",
                  background: "none",
                }}
              >
                <RiMenuLine />
              </button>
            )}
            <Content
              index={index}
              setSection={setSection}
              section={section}
              contentDataSection={contentDataSection}
              setIndex={setIndex}
              unitSection={unitSection}
              navBar={navBar}
            />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
