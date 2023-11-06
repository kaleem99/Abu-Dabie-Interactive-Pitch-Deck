import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import { useState } from "react";
import NavContentData from "./Content/NavContent";
function App() {
  const [section, setSection] = useState(NavContentData[0].name);
  return (
    <div className="App">
      <NavBar section={section} setSection={setSection} />
      <Content setSection={setSection} section={section} />
    </div>
  );
}

export default App;
