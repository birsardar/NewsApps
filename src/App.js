import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News/News";
import Footer from "./component/footer/Footer";
import Home from "./component/Home";
import About from "./component/about/About";
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route
            path="/entertainment"
            element={<News category="entertainment" />}
          />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
