import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { ProjectSummaryProps } from "./ProjectSummary";
//should install this to convert to date npm install moment
import moment from "moment";

type ProjectDetailsProps = {
    auth: { uid: string };
} & ProjectSummaryProps;
const ProjectDetails = ({ auth, project }: ProjectDetailsProps) => {
    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>
                            Posted by {project.autherFirstName}{" "}
                            {project.autherLastName}
                        </div>
                        <div>
                            {moment.unix(project.createdAt.seconds).calendar()}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>project loading...</p>
            </div>
        );
    }
};
const mapStateToProps = (state: ProjectSummaryProps, ownProps: string) => {
    // console.log(state);
    //get the id from the project
    const id = ownProps.match.params.id;
    // console.log(id);
    //get all the projects data
    const projects = state.firestore.data.projects;
    //get only one project if it's true else return null
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
