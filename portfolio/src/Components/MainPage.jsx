import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../Images & Styles/images/hi.png";
import profile from "../Images & Styles/images/avatar.png";
import localization from "../Images & Styles/images/place.png";
import lndIco from "../Images & Styles/images/linkedinIco.png";
import gitIco from "../Images & Styles/images/githubIco.png";
import htmlIco from "../Images & Styles/images/html.png";
import cssIco from "../Images & Styles/images/css.png";
import jsIco from "../Images & Styles/images/js.png";
import bootIco from "../Images & Styles/images/bootstrap.png";
import reactIco from "../Images & Styles/images/react.png";
import sassIco from "../Images & Styles/images/sass.png";
import flutterIco from "../Images & Styles/images/flutter.webp";

const MainPage = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [sass, setSass] = useState("");
  const [flutter, setFlutter] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Sass") {
      setSass(true);
    }else if (e.target.id == "Flutter") {
      setFlutter(true);
    }
  };
  // const handleMouseLeave = () => {
  //   setHtml();
  //   setCss();
  //   setJs();
  //   setBoot();
  //   setReact();
  //   setThree();
  // };
  return (
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">
            Front-End React Deveper || Mobile App Developer
          </span>
          <img src={hiIco} className="hello-ico" alt="profile-pic" />
          <div className="description">
            <div className="text-content">
              <div className="text">Hello, It's Me! </div>
              <div className="name">David Ohimai</div>
              <div className="job">
                <div className="job">
                  <span>And I'm a</span>
                  <div className="typing-text">
                    <span className="one">Frontend </span>
                    <span className="two">Developer.</span>
                  </div>
                </div>
              </div>
              <a href="#contact">
                <img
                  src={localization}
                  className="localization-ico"
                  alt="localization-icon"
                />
              </a>
            </div>
            <a href="https://www.linkedin.com/in/davidohimai" target="_blank">
              <img src={lndIco} className="social-ico" alt="linkedin icon" />
            </a>
            <a href="https://github.com/Daveohi" target="_blank">
              <img src={gitIco} className="social-ico" alt="github icon" />
            </a>
            <div className="description">Tech Stack:</div>
            <div className="tech-stack-box">
              <div
                className="tech-stack-single-box"
                id="HTML"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={htmlIco} className="tech-ico1" alt="html icon" />
                <span>{html ? "HTML" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="CSS"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={cssIco} className="tech-ico1" alt="css icon" />
                <span>{css ? "CSS/SCSS" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="JavaScript"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={jsIco} className="tech-ico1" alt="js icon" />
                <span>{js ? "JavaScript" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="Bootstrap"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={bootIco} className="tech-ico2" alt="bootstrap icon" />
                <span>{boot ? "Bootstrap" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="React"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={reactIco} className="tech-ico2" alt="react icon" />
                <span>{react ? "React.js" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="sassIco"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={sassIco} className="tech-ico3" alt="sass icon" />
                <span>{sass ? "Sass" : ""}</span>
              </div>
              <div
                className="tech-stack-single-box"
                id="sassIco"
                //   onMouseEnter={handleMouseEnter}
                //   onMouseLeave={handleMouseLeave}
              >
                <img src={flutterIco} className="tech-ico3" alt="Flutter icon" />
                <span>{flutter ? "Flutter" : ""}</span>
              </div>
            </div>
          </div>
          <div className="right-container">
            {/* <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas> */}
            <img src={profile} className="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
