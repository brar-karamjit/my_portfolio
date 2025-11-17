import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import BlogIndex from "./components/Blog/BlogIndex";
import BlogPost from "./components/Blog/BlogPost";
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

  const basename = (() => {
    if (!process.env.PUBLIC_URL) {
      return "/";
    }

    try {
      const url = new URL(process.env.PUBLIC_URL);
      return url.pathname === "/" ? "/" : url.pathname;
    } catch (err) {
      return process.env.PUBLIC_URL.startsWith("/")
        ? process.env.PUBLIC_URL
        : "/";
    }
  })();

  return (
    <Router basename={basename}>
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
            <Route path="/blog" element={<BlogIndex />} />
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
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
