import BreadCumb from "../../../Components/Common/BreadCumb";
import DaikinAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaikinAcRepairDetail";

const DaikinAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Diakin-AC-bg.avif"
                Title="Daikin AC Repair in Dubai and AC Maintenance Services"
            ></BreadCumb> 
            <DaikinAcRepairDetail></DaikinAcRepairDetail>           
        </div>
    );
};

export default DaikinAcRepair;