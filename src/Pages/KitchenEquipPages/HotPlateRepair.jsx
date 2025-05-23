import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import HotPlateRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/HotPlateRepairDetail.jsx";

const HotPlateRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/hot-plate.avif"
                Title="Hot Plate Repair"
            ></BreadCumb> 

            <HotPlateRepairDetail></HotPlateRepairDetail>        
        </div>
    );
};

export default HotPlateRepair;