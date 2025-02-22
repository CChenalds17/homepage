import { Project } from "@/types/project";
import Image from "next/image";

const projects: Project[] = [
    {
        title: "Matanataki Impact Reporting Platform",
        content: (
            <>
                <h3 className='text-xl mt-4'>User Creation and Authentication</h3>
                <Image className="mt-4" src="matanataki/matanataki-home.jpeg" alt="Matanataki Homepage" width={1200} height={600} />
                <Image className="mt-4" src="matanataki/matanataki-onboarding.jpeg" alt="Matanataki Onboarding Form" width={1200} height={600} />
                <h3 className='text-xl mt-4'>Individual and Aggregate KPI Tracking</h3>
                <Image className="mt-4" src="matanataki/matanataki-individual.jpeg" alt="Matanataki Individual KPI Metrics" width={1200} height={600} />
                <Image className="mt-4" src="/matanataki/matanataki-aggregate.jpeg" alt="Matanataki Aggregate KPI Metrics" width={1200} height={600} />
            </>
        )
    },
    {
        title: "Lex Ed",
        content: (
            <>
                <a href="https://www.github.com/CChenalds17/LexEd" rel="noreferrer" target="_blank">
                    <Image className="mt-4 hover:scale-[102%] transition-all" src="/lexed/lexed-logo.png" alt="Lex Ed" width={240} height={100} />
                </a>
                <h3 className='text-xl mt-4'>Grammatical Error Correction</h3>
                <Image className="mt-4" src="/lexed/lexed-demo1.gif" alt="Lex Ed Demo 1" width={1200} height={600} />
                <h3 className='text-xl mt-4'>Proofreading Practice</h3>
                <Image className="mt-4" src="/lexed/lexed-demo2.gif" alt="Lex Ed Demo 2" width={1200} height={600} />
            </>
        )
    },
    {
        title: "Practic.io",
        content: (
            <>
                <div className="w-[200px]">
                    <a href="https://www.github.com/CChenalds17/practicio" rel="noreferrer" target="_blank">
                        <Image className="mt-4 hover:scale-[102%] transition-all" src="/practicio/practicio-logo.png" alt="Practic.io" width={240} height={100} />
                    </a>
                </div>
                <h3 className='text-xl'>Practice Journaling</h3>
                <Image className="mt-4" src="/practicio/practicio-demo1.png" alt="Practic.io Demo 1" width={1200} height={600} />
                <h3 className='text-xl mt-4'>Practice Tools</h3>
                <Image className="mt-4" src="/practicio/practicio-demo2.png" alt="Practic.io Demo 2" width={1200} height={600} />
                <h3 className='text-xl mt-4'>History Tracking</h3>
                <Image className="mt-4" src="/practicio/practicio-demo3.png" alt="Practic.io Demo 2" width={1200} height={600} />
            </>
        )
    },
    {
        title: "Mask Detector",
        content: (
            <>
                <iframe 
                    className='mt-4 mb-10'
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/iEKMzGevGJw?si=EzGedQS10nRDjWbo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </>
        )
    }
];

export default projects;