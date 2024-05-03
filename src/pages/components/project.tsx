import React from "react";
import { LampContainer } from "./lamp";

const Projects: React.FC = () => {
    return(
    <div className="sectionHeader">
        <LampContainer>
            <h1 className="font-bold text-white relative z-20">
                Projects
            </h1>
            <p>DishDive
            </p>
        </LampContainer>
    </div>
    )
}

export default Projects;