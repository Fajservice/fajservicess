import BreadCumb from "../../../Components/Common/BreadCumb";
import SamsungAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SamsungAcRepairDetail";

const SamsungAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/samsung-triple-inverter.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Samsung AC Repair in Dubai - Air Conditioner Service Near by You"
            ></BreadCumb> 
            <SamsungAcRepairDetail></SamsungAcRepairDetail>           
        </div>
    );
};

export default SamsungAcRepair;