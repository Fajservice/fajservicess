import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DishwasherRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/DishwasherRepairDetail.jsx"

const DishwasherRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <DishwasherRepairDetail></DishwasherRepairDetail>
        </div>
    ); 
};

export default DishwasherRepair;