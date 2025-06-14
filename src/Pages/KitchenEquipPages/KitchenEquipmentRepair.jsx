import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentRepairDetail.jsx"

const KitchenEquipmentRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                Title="Commercial Cooking Equipment Repair and Maintenance Service Dubai"
                bgImg="img/banners/kitchen-equipments/Kitchen-Equipment-Repair.avif"
                // mobileBgImg="img/banners/kitchen-equipments/commercial-cooking-equipment-repair-faj-mobile.avif"

            ></BreadCumb>

            <KitchenEquipmentRepairDetail></KitchenEquipmentRepairDetail>
        </div>
    );
};

export default KitchenEquipmentRepair;