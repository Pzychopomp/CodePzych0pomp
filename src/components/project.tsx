import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Projects: React.FC = () => {
    return(
    <div className="sectionHeader">
      <div className=" w-full relative max-w-7xl px-40">
        <h1 className="font-bold text-white relative z-20">
          Projects
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-10">
          <HoverEffect items={projects} />
      </div>
    </div>
    )
}
export default Projects;

export const projects = [
  {
    title: "RaveDomain (W.I.P)",
    description:
      "A social site for ravers where they can post media. Working on feature to allow users to keep track of what event they're going to. Uses React, TypeScript, MongoDB, and Tailwind CSS.",
    link: "https://github.com/Pzychopomp/RaveDomain",
  },
  {
    title: "CodePzych0pomp",
    description:
      "A personal portfolio site which is updated yearly to reflect changes in my own personal career. Uses React with Next.js, Tailwind Css, and Typescript.",
    link: "https://github.com/Pzychopomp/CodePzych0pomp",
  },
  {
    title: "DishDive",
    description:
      "A recipe app developed for iOS that lets users create, store, and share their food recipes with others. Uses Swift for front-end and Firebase for back-end.",
    link: "https://github.com/Pzychopomp/DishDive",
  },
  {
    title: "Random Turn Tic-Tac-Toe",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/Pzychopomp/Random_turn_tic_tac_toe",
  },
  {
    title: "CS.Net",
    description:
      "A social media site akin to Facebook and Tinder where users could make new friends on college campuses, determined by the majors they were in and similar interest. Uses PHP, CSS, JavaScript, and MariaDB.",
    link: "https://github.com/ekcaroline/CS.NET-CPSC-362",
  },
];