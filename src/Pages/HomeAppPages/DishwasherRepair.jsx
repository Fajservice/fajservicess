import BreadCumb from "../../Components/Common/BreadCumb";
import DishwasherRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/DishwasherRepairDetail.jsx"

const DishwasherRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/dishwasher.avif"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <DishwasherRepairDetail></DishwasherRepairDetail>
        </div>
    ); 
};

export default DishwasherRepair;