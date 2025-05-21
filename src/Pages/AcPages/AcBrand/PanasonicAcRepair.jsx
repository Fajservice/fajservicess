import BreadCumb from "../../../Components/Common/BreadCumb";
import PanasonicAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/PanasonicAcRepairDetail";

const PanasonicAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Panasonic-AC-bg.avif"
                Title="Panasonic AC Repair in Dubai"
            ></BreadCumb> 
            <PanasonicAcRepairDetail></PanasonicAcRepairDetail>           
        </div>
    );
};

export default PanasonicAcRepair;