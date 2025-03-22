import BreadCumb from '../Components/Common/BreadCumb';
import Team2 from '../Components/Team/Team2';

const TeamPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Team"
            ></BreadCumb>    
            <Team2></Team2>             
        </div>
    );
};

export default TeamPage;