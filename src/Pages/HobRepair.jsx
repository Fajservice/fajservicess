import BreadCumb from "../Components/Common/BreadCumb";
import HobRepairDetail from "../Components/ServiceDetails/HobRepairDetail";

const HobRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Hob Repair Service Dubai"
            ></BreadCumb> 

            <HobRepairDetail></HobRepairDetail>        
        </div>
    );
};

export default HobRepair;