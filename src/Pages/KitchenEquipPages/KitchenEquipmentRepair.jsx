import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentRepairDetail.jsx"

const KitchenEquipmentRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/kitchen equipments/Kitchen-Equipment-Repair.jpg"
                Title="Commercial Cooking Equipment Repair and Maintenance Service Dubai "
            ></BreadCumb> 

            <KitchenEquipmentRepairDetail></KitchenEquipmentRepairDetail>
        </div>
    ); 
};

export default KitchenEquipmentRepair;