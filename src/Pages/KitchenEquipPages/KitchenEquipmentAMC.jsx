import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import KitchenEquipmentAMCDetail from "../../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentAMCDetail.jsx"

const KitchenEquipmentAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/Kitchen-Equipment-AMC-desktop.avif"
                mobileBgImg="img/banners/kitchen-equipments/Kitchen-Equipment-AMC-mobile.avif"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb>
            <KitchenEquipmentAMCDetail></KitchenEquipmentAMCDetail>
        </div>
    );
};

export default KitchenEquipmentAMC;