import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentAMCDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentAMCDetail.jsx"

const KitchenEquipmentAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/kitchen-equipment-and-appliance-amc-faj.avif"
                mobileBgImg="img/banners/kitchen-equipments/kitchen-equipment-and-appliance-amc-faj-mobile.avif"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb>
            <KitchenEquipmentAMCDetail></KitchenEquipmentAMCDetail>
        </div>
    );
};

export default KitchenEquipmentAMC;