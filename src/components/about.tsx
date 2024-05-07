import React from "react";
import { LampContainer } from "./ui/lamp";

const About: React.FC = () => {
    return(
    <LampContainer>
        <div className=" w-full relative max-w-7xl px-10">
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-white relative z-20">
                    About Me
                </h1>
                <br></br>
                <p>I&apos;m a first generation college student in my final semester at California State University, 
                    Fullerton pursuing a Bachelors of Science for Computer Science. As a son of Vietnamese immigrant parents,
                    I want to be someone who can make my family proud of the person I&apos;ve become. Currently situated in 
                    Garden Grove, CA, I&apos;m aspiring to be a Full Stack Developer creating sleek, modern, and efficent products.
                </p>
            </div>
        </div>
    </LampContainer>
    )
}

export default About;
