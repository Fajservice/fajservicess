import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CommercialWashingMachineRepairDetail from "../../Components/ServiceDetails/CommercialLaundryEquipDetails/CommercialWashingMachineRepairDetail.jsx";

const CommercialWashingMachineRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Commercial Laundry Equipment Services/Washing-Machine-Repair.avif"
                Title="Commercial Washing Machine Repair"
            ></BreadCumb>

            <CommercialWashingMachineRepairDetail></CommercialWashingMachineRepairDetail>
        </div>
    );
};

export default CommercialWashingMachineRepair;