import BreadCumb from "../../Components/Common/BreadCumb";
import OvenRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/OvenRepairDetail.jsx";

const OvenRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/commercial-oven-repair-service.avif"
                mobileBgImg="img/banners/kitchen-equipments/commercial-oven-repair.avif"
                Title="Commercial Oven Repair and Maintenance Services"
            ></BreadCumb>

            <OvenRepairDetail></OvenRepairDetail>
        </div>
    );
};

export default OvenRepair;