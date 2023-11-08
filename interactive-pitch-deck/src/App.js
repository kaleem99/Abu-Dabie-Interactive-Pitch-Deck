import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useState } from "react";
import NavContentData from "./Content/NavContent";
import courseData from "./Content/AppContent.json";
import HomePage from "./HomePage";

function App() {
  const [state, setState] = useState("Home");
  const [index, setIndex] = useState(0);
  const [unitSection, setUnitSection] = useState(0);
  const [section, setSection] = useState(
    courseData.courseSections[0].unit.sections[unitSection].name
  );
  const contentDataSection =
    courseData.courseSections[0].unit.sections[unitSection].content;
  console.log(contentDataSection);
  return (
    <div className="App">
      {state === "Home" ? (
        <HomePage setState={setState} />
      ) : (
        <>
          <NavBar
            index={index}
            setIndex={setIndex}
            section={section}
            setSection={setSection}
            setUnitSection={setUnitSection}
            unitSection={unitSection}
          />
          <Content
            index={index}
            setSection={setSection}
            section={section}
            contentDataSection={contentDataSection}
            setIndex={setIndex}
            unitSection={unitSection}
          />{" "}
        </>
      )}
    </div>
  );
}

export default App;
