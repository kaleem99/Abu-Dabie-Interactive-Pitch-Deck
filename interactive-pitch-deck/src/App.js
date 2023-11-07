import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useState } from "react";
import NavContentData from "./Content/NavContent";
import courseData from "./Content/AppContent.json";

function App() {
  const [index, setIndex] = useState(0);
  const [section, setSection] = useState("");
  const contentDataSection = courseData.courseSections[0].unit.sections[index];
  return (
    <div className="App">
      <NavBar
        index={index}
        setIndex={setIndex}
        section={section}
        setSection={setSection}
      />
      <Content
        index={index}
        setSection={setSection}
        section={section}
        contentDataSection={contentDataSection}
        setIndex={setIndex}
      />
    </div>
  );
}

export default App;
