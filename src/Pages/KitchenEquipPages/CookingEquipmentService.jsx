import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CookingEquipmentServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/CookingEquipmentServiceDetail.jsx";
const CookingEquipmentService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/commercial-cooking-equipment-repair-faj.avif"
                mobileBgImg="img/banners/kitchen-equipments/Commercial-Cooking-Equipment-Repair-and-Maintenance-Service-Dubai-faj.avif"
                Title="Gas Range Repair"
            ></BreadCumb>
            <CookingEquipmentServiceDetail />
        </div>
    );
};

export default CookingEquipmentService;