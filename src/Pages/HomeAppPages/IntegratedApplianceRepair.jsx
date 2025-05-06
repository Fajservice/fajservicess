import BreadCumb from "../../Components/Common/BreadCumb";
import IntegratedApplianceRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/IntegratedApplianceRepairDetail";

const IntegratedApplianceRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/Oven-Repair-Service.jpg"
                Title="Gas & Electrical Oven Repair Service in Dubai"
            ></BreadCumb> 
            <IntegratedApplianceRepairDetail></IntegratedApplianceRepairDetail>

        </div>
    );
};

export default IntegratedApplianceRepair;