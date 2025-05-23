import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import FoodWarmerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/FoodWarmerRepairDetail.jsx";

const FoodWarmerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
               bgImg="img/banners/kitchen-equipments/food-warmer.avif"
                Title="Food Warmer Repair"
            ></BreadCumb> 

            <FoodWarmerRepairDetail></FoodWarmerRepairDetail>        
        </div>
    );
};

export default FoodWarmerRepair;