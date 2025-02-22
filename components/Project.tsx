import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ProjectProps {
    title: string;
    children: React.ReactNode;
}

export default function Project({ title, children }: ProjectProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-6">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm 
                hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all"
            >
                <h2>{title}</h2>
                <IoIosArrowForward
                    className={`transition-all duration-200 ${isOpen ? 'rotate-90' : ''}`}
                />
            </div>

            <div className={`${isOpen ? 'transition-all duration-100 ease-linear' : 'hidden transition-all duration-100 ease-linear'}`}>
                {children}
            </div>
        </div>
    );
}