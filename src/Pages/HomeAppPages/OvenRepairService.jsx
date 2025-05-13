import BreadCumb from "../../Components/Common/BreadCumb";
import OvenRepairServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/OvenRepairServiceDetail";

const OvenRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Oven-Repair-Service.avif"
                Title="Gas & Electrical Oven Repair Service in Dubai"
            ></BreadCumb> 
            <OvenRepairServiceDetail></OvenRepairServiceDetail>

        </div>
    );
};

export default OvenRepairService;