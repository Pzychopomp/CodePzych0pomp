import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Skills: React.FC = () => {
    return(
      <div className="sectionHeader">
      <div className=" w-full relative max-w-7xl px-40">
        <h1 className="font-bold text-white relative z-20">
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
    image: "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png"
  },
  {
    title: "Swift",
    description:
      "",
    link: "https://www.swift.org/",
    image: "https://thumbnail.imgbin.com/13/0/15/imgbin-computer-icons-swift-programming-language-computer-programming-bird-logo-dWpXvMAJ1Ec29LUj3AFiVGUX0_t.jpg"
  },
  {
    title: "Python",
    description:
      "",
    link: "https://www.python.org/about/gettingstarted/",
    image: "https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png"
  },
  {
    title: "React",
    description:
      "",
    link: "https://react.dev/",
    image: "https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
  },
  {
    title: "TypeScript",
    description:
      "",
    link: "https://www.typescriptlang.org/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
  },
];