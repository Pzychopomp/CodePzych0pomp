import React from "react";
import { LampContainer } from "./ui/lamp";

const Contact: React.FC = () => {
    return(
    <LampContainer>
        <div className=" w-full relative max-w-7xl px-10">
            <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text relative text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                    Contact Me
            </h1>
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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
    )
}

export default Contact;