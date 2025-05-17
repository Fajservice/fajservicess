import BreadCumb from "../../Components/Common/BreadCumb";
import FreestandingHomeAppliancesRepairServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/FreestandingHomeAppliancesRepairServiceDetail";

const FreestandingHomeAppliancesRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Repair and Service in Dubai"
            ></BreadCumb>

            <FreestandingHomeAppliancesRepairServiceDetail />
        </div>
    );
};

export default FreestandingHomeAppliancesRepairService;