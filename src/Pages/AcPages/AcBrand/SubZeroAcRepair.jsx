import BreadCumb from "../../../Components/Common/BreadCumb";
import SubZeroAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SubZeroAcRepairDetail";

const SubZeroAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/Subzero-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/Subzero-ac-repair-faj.avif"
                Title="Sub Zero Ac Repair in Dubai - AC Maintenance Service Near You"
            ></BreadCumb> 
            <SubZeroAcRepairDetail></SubZeroAcRepairDetail>           
        </div>
    );
};

export default SubZeroAcRepair;