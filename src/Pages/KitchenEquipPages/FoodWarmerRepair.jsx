import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import FoodWarmerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/FoodWarmerRepairDetail.jsx";

const FoodWarmerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Food Warmer Repair"
            ></BreadCumb> 

            <FoodWarmerRepairDetail></FoodWarmerRepairDetail>        
        </div>
    );
};

export default FoodWarmerRepair;