import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Blog from "./components/Animations/Animations";
import AnimationPageLayout from "./components/Animations/AnimationPageLayout";
import HttpsKeyExchange from "./components/Animations/HttpsKeyExchange";
import PingAnimation from "./components/Animations/PingAnimation";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
  <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/https-key-exchange"
              element={(
                <AnimationPageLayout>
                  <HttpsKeyExchange />
                </AnimationPageLayout>
              )}
            />
            <Route
              path="/blog/icmp-ping"
              element={(
                <AnimationPageLayout>
                  <PingAnimation />
                </AnimationPageLayout>
              )}
            />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
