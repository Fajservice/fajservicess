import BreadCumb from "../../../Components/Common/BreadCumb";
import PanasonicAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/PanasonicAcRepairDetail";

const PanasonicAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/panasonic-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/panasonic-ac-repair-faj.avif"
                Title="Panasonic AC Repair in Dubai"
            ></BreadCumb> 
            <PanasonicAcRepairDetail></PanasonicAcRepairDetail>           
        </div>
    );
};

export default PanasonicAcRepair;