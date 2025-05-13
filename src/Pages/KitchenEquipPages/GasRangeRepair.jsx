import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import GasRangeDetail from "../../Components/ServiceDetails/KitchenEquipDetails/GasRangeRepairDetail.jsx";
const GasRangeRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments-banners/gas-range.avif"
                Title="Gas Range Repair"
            ></BreadCumb> 
            <GasRangeDetail />       
        </div>
    );
};

export default GasRangeRepair;