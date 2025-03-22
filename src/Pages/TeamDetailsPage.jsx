import BreadCumb from "../Components/Common/BreadCumb";
import Team1 from "../Components/Team/Team1";
import TeamDetails from "../Components/TeamDetails/TeamDetails";

const TeamDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Team Details"
            ></BreadCumb> 
            <TeamDetails></TeamDetails> 
            <Team1></Team1>          
        </div>
    );
};

export default TeamDetailsPage;