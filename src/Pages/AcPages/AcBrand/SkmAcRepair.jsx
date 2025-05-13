import BreadCumb from "../../../Components/Common/BreadCumb";
import SkmAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SkmAcRepairDetail";

const SkmAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/SKM-AC-bg.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="SKM AC Repair in Dubai - SKM Air Conditioner Service Near You"
            ></BreadCumb> 
            <SkmAcRepairDetail></SkmAcRepairDetail>           
        </div>
    );
};

export default SkmAcRepair;