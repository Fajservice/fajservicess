import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentAMCDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentAMCDetail.jsx"

const KitchenEquipmentAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen equipments/Kitchen-Equipment-AMC.jpg"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb> 
            <KitchenEquipmentAMCDetail></KitchenEquipmentAMCDetail>
        </div>
    ); 
};

export default KitchenEquipmentAMC;