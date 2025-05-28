import BreadCumb from "../../../Components/Common/BreadCumb";
import TCLAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/TclAcRepairDetail";

const TCLAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/tcl-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/tcl-ac-repair-faj.avif"
                Title="TCL AC Repair in Dubai - HVAC Maintenance"
            ></BreadCumb> 
            <TCLAcRepairDetail></TCLAcRepairDetail>           
        </div>
    );
};

export default TCLAcRepair;