import BreadCumb from "../../Components/Common/BreadCumb";
import UnoxCommercialOvenRepairServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/UnoxCommercialOvenRepairServiceDetail.jsx";

const UnoxCommercialOvenRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/commercial-oven-repair-service.avif"
                mobileBgImg="img/banners/kitchen-equipments/commercial-oven-repair.avif"
                Title="Commercial Oven Repair and Maintenance Services"
            ></BreadCumb>

            <UnoxCommercialOvenRepairServiceDetail></UnoxCommercialOvenRepairServiceDetail>
        </div>
    );
};

export default UnoxCommercialOvenRepairService;