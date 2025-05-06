import BreadCumb from "../../Components/Common/BreadCumb";
import SmallAppliancesRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/SmallAppliancesRepairDetail.jsx";

const SmallAppliancesRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/Oven-Repair-Service.jpg"
                Title="Gas & Electrical Oven Repair Service in Dubai"
            ></BreadCumb> 
            <SmallAppliancesRepairDetail></SmallAppliancesRepairDetail>

        </div>
    );
};

export default SmallAppliancesRepair;