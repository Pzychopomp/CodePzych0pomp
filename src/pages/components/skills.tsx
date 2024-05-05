import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Skills: React.FC = () => {
    return(
      <div className="sectionHeader">
      <div className=" w-full relative max-w-7xl px-40">
        <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 relative bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Skills
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-10">
          <HoverEffect items={projects} />
      </div>
    </div>
    )
}

export default Skills;

export const projects = [
  {
    title: "C++",
    description:
      "",
    link: "https://cplusplus.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
  },
  {
    title: "Swift",
    description:
      "",
    link: "https://www.swift.org/",
    image: "https://www.svgrepo.com/show/452110/swift.svg"
  },
  {
    title: "Python",
    description:
      "",
    link: "https://www.python.org/about/gettingstarted/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png"
  },
  {
    title: "React",
    description:
      "",
    link: "https://react.dev/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
  },
  {
    title: "TypeScript",
    description:
      "",
    link: "https://www.typescriptlang.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
  },
  {
    title: "HTML",
    description:
      "",
    link: "https://html.spec.whatwg.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
  },
];