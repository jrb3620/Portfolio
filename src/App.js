import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThankYou from "./components/ThankYou";

export default function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFormSubmit() {
        setIsSubmitted(true);
    }

    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            {!isSubmitted ? (
                <>
                    <About />
                    <Projects />
                    <Skills />
                    <Contact onFormSubmit={handleFormSubmit} />
                </>
            ) : (
                <ThankYou />
            )}
        </main>
    );
}
