import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentAMCDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentAMCDetail.jsx"

const KitchenEquipmentAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <KitchenEquipmentAMCDetail></KitchenEquipmentAMCDetail>
        </div>
    ); 
};

export default KitchenEquipmentAMC;