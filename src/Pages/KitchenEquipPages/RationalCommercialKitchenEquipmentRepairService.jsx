import BreadCumb from "../../Components/Common/BreadCumb";
import RationalCommercialKitchenEquipmentRepairServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/RationalCommercialKitchenEquipmentRepairServiceDetail.jsx";

const RationalCommercialKitchenEquipmentRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/commercial-oven-repair-service.avif"
                mobileBgImg="img/banners/kitchen-equipments/commercial-oven-repair.avif"
                Title="Commercial Oven Repair and Maintenance Services"
            ></BreadCumb>

            <RationalCommercialKitchenEquipmentRepairServiceDetail></RationalCommercialKitchenEquipmentRepairServiceDetail>
        </div>
    );
};

export default RationalCommercialKitchenEquipmentRepairService;