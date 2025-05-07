import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentAMCDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentAMCDetail.jsx"

const KitchenEquipmentAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/annual-maintenance-contract-(AMC).jpg"

                Title="Kitchen Equipments Annual Maintenance Contract"
            ></BreadCumb> 

            <KitchenEquipmentAMCDetail></KitchenEquipmentAMCDetail>
        </div>
    ); 
};

export default KitchenEquipmentAMC;