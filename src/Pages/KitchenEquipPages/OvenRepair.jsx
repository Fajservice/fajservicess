import BreadCumb from "../../Components/Common/BreadCumb";
import OvenRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/OvenRepairDetail.jsx";

const OvenRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Oven Repair"
            ></BreadCumb> 

            <OvenRepairDetail></OvenRepairDetail>        
        </div>
    );
};

export default OvenRepair;