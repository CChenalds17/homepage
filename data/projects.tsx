import { Project } from "@/types/project";

const projects: Project[] = [
    {
        title: "Matanataki Impact Reporting Platform",
        content: (
            <>
                <h3 className='text-xl mt-4'>User Creation and Authentication</h3>
                <img className="my-4" src="/matanataki/matanataki-home.jpeg" alt="Matanataki Homepage" />
                <img className="my-4" src="/matanataki/matanataki-onboarding.jpeg" alt="Matanataki Onboarding Form" />
                <h3 className='text-xl'>Individual and Aggregate KPI Tracking</h3>
                <img className="my-4" src="/matanataki/matanataki-individual.jpeg" alt="Matanataki Individual KPI Metrics" />
                <img className="my-4" src="/matanataki/matanataki-aggregate.jpeg" alt="Matanataki Aggregate KPI Metrics" />
            </>
        )
    },
    {
        title: "Lex Ed",
        content: (
            <>
                <div className="w-[200px]">
                    <a href="https://www.github.com/CChenalds17/LexEd" rel="noreferrer" target="_blank">
                        <img className="my-4 hover:scale-[102%] transition-all" src="/lexed/lexed-logo.png" alt="Lex Ed" />
                    </a>
                </div>
                <h3 className='text-xl'>Grammatical Error Correction</h3>
                <img className="my-4" src="/lexed/lexed-demo1.gif" alt="Lex Ed Demo 1" />
                <h3 className='text-xl'>Proofreading Practice</h3>
                <img className="my-4" src="/lexed/lexed-demo2.gif" alt="Lex Ed Demo 2" />
            </>
        )
    },
    {
        title: "Practic.io",
        content: (
            <>
                <div className="w-[200px]">
                    <a href="https://www.github.com/CChenalds17/practicio" rel="noreferrer" target="_blank">
                        <img className="my-4 hover:scale-[102%] transition-all" src="/practicio/practicio-logo.png" alt="Practic.io" width={240} height={100} />
                    </a>
                </div>
                <h3 className='text-xl'>Practice Journaling</h3>
                <img className="my-4" src="/practicio/practicio-demo1.png" alt="Practic.io Demo 1" />
                <h3 className='text-xl'>Practice Tools</h3>
                <img className="my-4" src="/practicio/practicio-demo2.png" alt="Practic.io Demo 2" />
                <h3 className='text-xl'>History Tracking</h3>
                <img className="my-4" src="/practicio/practicio-demo3.png" alt="Practic.io Demo 2" />
            </>
        )
    },
    {
        title: "Mask Detector",
        content: (
            <>
                <iframe 
                    className='my-10'
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