import BreadCumb from "../Components/Common/BreadCumb";
import FreestandingHomeAppliancesRepairServiceDetail from "../Components/ServiceDetails/FreestandingHomeAppliancesRepairServiceDetail";

const FreestandingHomeAppliancesRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/small-home.jpg"
                Title="Home Appliance Repair and Service in Dubai"
            ></BreadCumb> 

            <FreestandingHomeAppliancesRepairServiceDetail></FreestandingHomeAppliancesRepairServiceDetail>        
        </div>
    );
};

export default FreestandingHomeAppliancesRepairService;