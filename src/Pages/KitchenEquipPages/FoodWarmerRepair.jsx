import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import FoodWarmerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/FoodWarmerRepairDetail.jsx"

const FoodWarmerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <FoodWarmerRepairDetail></FoodWarmerRepairDetail>
        </div>
    ); 
};

export default FoodWarmerRepair;