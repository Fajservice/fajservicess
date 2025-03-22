import BreadCumb from "../Components/Common/BreadCumb";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";


const ProjectDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Project Details"
            ></BreadCumb>    
            <ProjectDetails></ProjectDetails>          
        </div>
    );
};

export default ProjectDetailsPage;