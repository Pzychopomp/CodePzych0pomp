import React from "react";
import { LampContainer } from "./ui/lamp";

const About: React.FC = () => {
    return(
    <LampContainer>
        <div className=" w-full relative max-w-7xl px-10">
            <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text relative text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                    About Me
            </h1>
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <p>I'm a first generation college student in my final semester at California State University, 
                    Fullerton pursuing a Bachelors of Science for Computer Science. As a son of Vietnamese immigrant parents,
                    I want to be someone who can make my family proud of the person I've become. Currently situated in 
                    Garden Grove, CA, I'm aspiring to be a Full Stack Developer creating sleek, modern, and efficent products.
                </p>
            </div>
        </div>
    </LampContainer>
    )
}

export default About;