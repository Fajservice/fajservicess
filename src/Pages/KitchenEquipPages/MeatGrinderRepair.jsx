import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import MeatGrinderRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/MeatGrinderRepairDetail.jsx";

const MeatGrinderRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <MeatGrinderRepairDetail></MeatGrinderRepairDetail>
        </div>
    ); 
};

export default MeatGrinderRepair;