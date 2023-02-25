import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import * as THREE from "three";
import Favicon from "react-favicon";
import HTML_logo from './assets/favicon/HTML_logo.ico'
import JS_logo from "./assets/favicon/JS_logo.ico";
import TS_logo from "./assets/favicon/TS_logo.ico";
import CSS_logo from "./assets/favicon/CSS_logo.ico";
import ReactJS_logo from "./assets/favicon/ReactJS_logo.ico";
import Redux_logo from "./assets/favicon/Redux_logo.ico";
import BackgroundTexture from "./components/background/BackgroundTexture";

const App = () => {
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   const threeScript = document.createElement("script");
  //   threeScript.setAttribute("id", "threeScript");
  //   threeScript.setAttribute(
  //     "src",
  //     "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
  //   );
  //   document.getElementsByTagName("head")[0].appendChild(threeScript);

  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       FOG({
  //         el: vantaRef.current,
  //         THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         highlightColor: 0x4db5ff,
  //         midtoneColor: 0x1f1f38,
  //         lowlightColor: 0x4db5ff,
  //         baseColor: 0x000,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (threeScript) {
  //       threeScript.remove();
  //     }
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <div>
      <Favicon
        url={[HTML_logo, CSS_logo, JS_logo, TS_logo, ReactJS_logo, Redux_logo]}
      />
      <ReactNotifications />
      <BackgroundTexture />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
