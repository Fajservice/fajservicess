import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import GasRangeDetail from "../../Components/ServiceDetails/KitchenEquipDetails/GasRangeRepairDetail.jsx";
const GasRangeRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Gas Range Repair"
            ></BreadCumb> 
            <GasRangeDetail />       
        </div>
    );
};

export default GasRangeRepair;