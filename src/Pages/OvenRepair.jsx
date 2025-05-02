import BreadCumb from "../Components/Common/BreadCumb";
import OvenRepairDetail from "../Components/ServiceDetails/OvenRepairDetail";

const OvenRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Gas & Electrical Oven Repair Service"
            ></BreadCumb> 

            <OvenRepairDetail></OvenRepairDetail>        
        </div>
    );
};

export default OvenRepair;