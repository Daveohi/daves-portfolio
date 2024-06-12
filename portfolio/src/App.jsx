import MainPage from "./Components/MainPage";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
// import Projects from "./Components/MiniProjects";
import "../src/Images & Styles/Styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
