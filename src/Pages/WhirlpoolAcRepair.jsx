import BreadCumb from "../Components/Common/BreadCumb";
import WhirpoolAcRepairDetail from "../Components/ServiceDetails/WhirpoolAcRepairDetail.jsx";

const WhirpoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/whirpool-ac-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Whirlpool Air Condition Repair in Dubai - AC Maintenance and Services"
            ></BreadCumb> 
            <WhirpoolAcRepairDetail></WhirpoolAcRepairDetail>           
        </div>
    );
};

export default WhirpoolAcRepair;