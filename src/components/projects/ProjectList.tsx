import ProjectSummary from "./ProjectSummary";
type ProjectListProps = {
    projects: [];
};
const ProjectList = ({ projects }: ProjectListProps) => {
    return (
        <div className="project-list section">
            {projects?.length > 0 &&
                projects.map((project) => {
                    return <ProjectSummary project={project} />;
                })}
        </div>
    );
};

export default ProjectList;
