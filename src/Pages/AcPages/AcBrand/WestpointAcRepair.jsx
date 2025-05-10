import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import WestpointAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/WestpointAcRepairDetail.jsx";

const WestpointAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/ac_service-bannerbg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Westpoint AC Repair in Dubai - AC Maintenance and Services"
            ></BreadCumb> 
            <WestpointAcRepairDetail></WestpointAcRepairDetail>           
        </div>
    );
};

export default WestpointAcRepair;