import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import UnityProjects from "./components/UnityProjects";
import JavaScriptProjects from "./components/JavaScriptProjects";
import './index.css';

function Page(){
    return(
    <div className="Page-Container">
        <Header />
        <Home />
        <About />
        <JavaScriptProjects />
        <UnityProjects />
        <Contact />
        <Footer />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);