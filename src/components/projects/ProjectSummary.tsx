import moment from "moment";
// import { Link } from "react-router-dom";

type CustomDate = {
    seconds: number;
    nanoseconds: number;
};
export type ProjectSummaryProps = {
    project: {
        autherFirstName: string;
        autherLastName: string;
        title: string;
        createdAt: CustomDate;
        id: string;
        content: string;
    };
};
const ProjectSummary = ({ project }: ProjectSummaryProps) => {
    return (
        <a href={"/project/" + project.id} key={project.id}>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">{project.title}</span>
                    <p>
                        Posted by{" "}
                        {project.autherFirstName + " " + project.autherLastName}
                    </p>

                    <p className="grey-text">
                        {moment.unix(project.createdAt.seconds).calendar()}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default ProjectSummary;
