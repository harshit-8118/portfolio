import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import TlLanguage from "./components/TlLanguage";
import TlDevelopment from "./components/TlDevelopment";
import TlDatabase from "./components/TlDatabase";
import TlTools from "./components/TlTools";
import TlToolsTechs from "./components/TlToolsTechs";

function App() {
  return (
    <div className="relative min-w-[17rem]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<TlLanguage />} />
            <Route path="home/dev-techs" element={<TlDevelopment />} />
            <Route path="home/dbs-techs" element={<TlDatabase />} />
            <Route path="home/tools" element={<TlTools />} />
            <Route path="home/tools-techs" element={<TlToolsTechs />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
