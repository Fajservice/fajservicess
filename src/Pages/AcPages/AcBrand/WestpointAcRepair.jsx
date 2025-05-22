import BreadCumb from "../../../Components/Common/BreadCumb.jsx";
import WestpointAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/WestpointAcRepairDetail.jsx";

const WestpointAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/westpoint-ac-repair-faj.avif"
                Title="Westpoint AC Repair in Dubai - AC Maintenance and Services"
            ></BreadCumb> 
            <WestpointAcRepairDetail></WestpointAcRepairDetail>           
        </div>
    );
};

export default WestpointAcRepair;