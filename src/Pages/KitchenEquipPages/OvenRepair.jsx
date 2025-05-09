import BreadCumb from "../../Components/Common/BreadCumb";
import OvenRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/OvenRepairDetail.jsx";

const OvenRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/kitchen equipments/oven.jpg"
                Title="Oven Repair"
            ></BreadCumb> 

            <OvenRepairDetail></OvenRepairDetail>        
        </div>
    );
};

export default OvenRepair;