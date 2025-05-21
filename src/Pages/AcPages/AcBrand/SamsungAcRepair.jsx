import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SamsungAcRepairDetail";

const SamsungAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/samsung-triple-inverter.avif"
                Title="Samsung AC Repair in Dubai – Samsung AC Maintenance Service"
            ></BreadCumb> 
            <SamsungAcRepairDetail></SamsungAcRepairDetail>           
        </div>
    );
};

export default SamsungAcRepair;