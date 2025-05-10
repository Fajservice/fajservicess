import BreadCumb from "../../../Components/Common/BreadCumb";
import SubZeroAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SubZeroAcRepairDetail";

const SubZeroAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Subzero-AC-bg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Sub Zero Ac Repair in Dubai - AC Maintenance Service Near You"
            ></BreadCumb> 
            <SubZeroAcRepairDetail></SubZeroAcRepairDetail>           
        </div>
    );
};

export default SubZeroAcRepair;