import BreadCumb from "../../Components/Common/BreadCumb";
import GasRangeRepairServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/GasRangeRepairServiceDetail"

const GasRangeRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/gas-range-repair.avif"
                Title="Gas Cooker Repair"
            ></BreadCumb>

            <GasRangeRepairServiceDetail></GasRangeRepairServiceDetail>
        </div>
    );
};

export default GasRangeRepairService;