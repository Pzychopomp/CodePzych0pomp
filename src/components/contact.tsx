import React from "react";
import { LampContainer } from "./ui/lamp";

const Contact: React.FC = () => {
    return(
    <div className="sectionHeader">
        <LampContainer>
            <div className=" w-full relative max-w-4xl px-10">
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-white relative z-20">
                    Contact Me
                </h1>
                <p>
                    David Nguyen <br></br>
                    Email: david.nguyen5190@gmail.com <br></br>
                    Phone: 714-488-5881 <br></br>
                    LinkedIn: https://www.linkedin.com/in/davidnguyen777/ <br></br>
                    Github: https://github.com/Pzychopomp <br></br>
                </p>
                </div>
            </div>
        </LampContainer>
    </div>
    )
}

export default Contact;