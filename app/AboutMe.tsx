import AboutCard from "./AboutCard";
import aboutContent from "@/data/aboutme";

export default function AboutMe() {
    return (
        <div className="my-6 xl:px-72 px-10 xl:grid xl:grid-rows-1 xl:grid-cols-4 xl:gap-6">
            <AboutCard />

            <div className='px-4 py-4 xl:col-span-3'>
                <h2 className='text-3xl font-semibold mb-4'>About Me</h2>
                {aboutContent}
            </div>
        </div>
    );
}