import BreadCumb from "../../Components/Common/BreadCumb";
import GasRangeRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/GasRangeRepairDetail"

const GasRangeRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/gas-range-repair.avif"
                Title="Gas Cooker Repair"
            ></BreadCumb>

            <GasRangeRepairDetail></GasRangeRepairDetail>
        </div>
    );
};

export default GasRangeRepair;