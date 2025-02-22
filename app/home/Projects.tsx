import Project from "@/components/Project";
import projects from "@/data/projects";

export default function Projects() {
    return (
        <div className="mt-12 mb-6 xl:px-72 px-10">

            <h1 className="text-3xl font-semibold">
                Projects
            </h1>

            {projects.map((project, index) => (
                <Project key={index} title={project.title}>
                    {project.content}
                </Project>
            ))}
            <h2 className="text-xl pl-2">
                More to come!
            </h2>
        </div>
    );
}