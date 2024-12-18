import React from "react";
import Header from "./header";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";

const HomePage: React.FC = () => {

    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            < Experience />
            < Projects />
            < Contact />
        </div>
    );

};

export default HomePage;