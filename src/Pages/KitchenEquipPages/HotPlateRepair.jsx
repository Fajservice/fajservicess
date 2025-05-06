import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import HotPlateRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/HotPlateRepairDetail.jsx";

const HotPlateRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Hot Plate Repair"
            ></BreadCumb> 

            <HotPlateRepairDetail></HotPlateRepairDetail>        
        </div>
    );
};

export default HotPlateRepair;