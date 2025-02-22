import { FaMapPin, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa"
import { IoDocumentTextSharp } from "react-icons/io5";

import Image from "next/image";

export default function AboutCard() {
    return (
        <div className="px-4 py-4 xl:col-span-1 show-md rounded-lg shadow-md shadow-gray-700">
            <Image
                src="/about/headshot.jpg"
                width={124}
                height={124}
                className="rounded-full outline outline-1 outline-gray-700 outline-offset-4 shadow-xl"
                alt="Headshot of Charlie"
            />
            <h4 className="font-bold text-xl mt-4 mb-2">
                Charlie Chen
            </h4>
            <p className="text-base mb-4">
                charliechen at college.harvard.edu
            </p>
            <div className="text-base flex items-center mb-3">
                <FaMapPin className="mr-2 text-red-800" /> <p>Philadelphia, PA</p>
            </div>
            <a href='https://www.linkedin.com/in/charliechen1742' rel="noreferrer" target="_blank">
                <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                    <FaLinkedin className='mr-2 text-sky-700' /><p>LinkedIn</p>
                </div>
            </a>
            <a href='https://www.github.com/CChenalds17' rel="noreferrer" target="_blank">
                <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                    <FaGithub className='mr-2 text-slate-800' /> <p>Github</p>
                </div>
            </a>
            <a href='/about/Charlie%20Chen%20SWE%20Resume.pdf' rel="noreferrer" target="_blank">
                <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                    <IoDocumentTextSharp className='mr-2 text-cyan-700' /> <p>Resume</p>
                </div>
            </a>
            <a href='https://www.youtube.com/channel/UCwGPZ-NBwu65F00qxay3zpg' rel="noreferrer" target="_blank">
                <div className='text-base flex items-center hover:opacity-65 hover:scale-105 transition-all duration-300'>
                    <FaYoutube className='mr-2 text-red-600' /> <p>YouTube</p>
                </div>
            </a>
        </div>
    );
}