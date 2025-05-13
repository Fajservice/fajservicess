import BreadCumb from "../../Components/Common/BreadCumb";
import SmallAppliancesRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/SmallAppliancesRepairDetail.jsx";

const SmallAppliancesRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Oven-Repair-Service.avif"
                Title="Small Home Appliances Service Center in Dubai"
            ></BreadCumb> 
            <SmallAppliancesRepairDetail></SmallAppliancesRepairDetail>

        </div>
    );
};

export default SmallAppliancesRepair;