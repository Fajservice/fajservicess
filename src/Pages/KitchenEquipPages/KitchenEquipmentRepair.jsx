import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentRepairDetail.jsx"

const KitchenEquipmentRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen equipments/Kitchen-Equipment-Repair.jpg"
                Title="Kitchen Equipments Service and Repair Dubai"
            ></BreadCumb> 

            <KitchenEquipmentRepairDetail></KitchenEquipmentRepairDetail>
        </div>
    ); 
};

export default KitchenEquipmentRepair;