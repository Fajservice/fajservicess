import BreadCumb from "../Components/Common/BreadCumb";
import SkmAcRepairDetail from "../Components/ServiceDetails/SkmAcRepairDetail";

const SkmAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="SKM AC Repair in Dubai - SKM Air Conditioner Service Near You"
            ></BreadCumb> 
            <SkmAcRepairDetail></SkmAcRepairDetail>           
        </div>
    );
};

export default SkmAcRepair;