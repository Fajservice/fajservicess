import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CookingEquipmentServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/CookingEquipmentServiceDetail.jsx";
const CookingEquipmentService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/Cooking-Equipment-repair.avif"
                Title="Gas Range Repair"
            ></BreadCumb>
            <CookingEquipmentServiceDetail />
        </div>
    );
};

export default CookingEquipmentService;