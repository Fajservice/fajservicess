import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import MeatGrinderRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/MeatGrinderRepairDetail.jsx";
const MeatGrinderRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Meat Grinder Repair"
            ></BreadCumb> 

            <MeatGrinderRepairDetail></MeatGrinderRepairDetail>        
        </div>
    );
};

export default MeatGrinderRepair;