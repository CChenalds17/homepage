import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface SongProps {
    title: string;
    composer: string;
    additionalText: string;
    date: string;
    url: string;
}

export default function Song({ title, composer, additionalText, date, url }: SongProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-6">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-2xl shadow-md px-4 py-4 outline outline-1 rounded-sm
                hover:cursor-pointer hover:shadow-xl hover:opacity-75 hover:scale-[101%] transition-all"
            >
                <h2 className="text-2xl">
                    <span className="italic">{title}</span> by {composer} {additionalText}
                </h2>
                <IoIosArrowForward
                    className={!isOpen ? `transition-all duration-200` : `transitional-all duration-200 rotate-90`}
                />
            </div>
            
            <div
                className={!isOpen ? `hidden transition-all duration-100 ease-linear` : `transition-all duration-100 ease-linear`}
            >
                <p className="italic my-6">{date}</p>
                <iframe
                    className="mb-10"
                    width={560}
                    height={315}
                    src={url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen 
                />
            </div>
        </div>
    );
}