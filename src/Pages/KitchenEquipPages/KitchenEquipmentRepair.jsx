import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentRepairDetail.jsx"

const KitchenEquipmentRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <KitchenEquipmentRepairDetail></KitchenEquipmentRepairDetail>
        </div>
    ); 
};

export default KitchenEquipmentRepair;