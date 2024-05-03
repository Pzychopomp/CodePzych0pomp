import React from "react";
import { LampContainer } from "./lamp";

const Skills: React.FC = () => {
    return(
    <div className="sectionHeader">
        <LampContainer>
            <h1 className="font-bold text-white relative z-20">
                Skills
            </h1>
            <p>I'm a first generation college student in my final semester at California State University, Fullerton pursuing
            a Bachelors of Science for Computer Science. I'm aspiring to be a Full Stack Developer creating ___ products.
            </p>
        </LampContainer>
    </div>
    )
}

export default Skills;