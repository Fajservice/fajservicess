import BreadCumb from "../../../Components/Common/BreadCumb";
import NikaiAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/NikaiAcRepairDetail";

const NikaiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Nikai-AC-bg.avif"
                Title="Nikai AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <NikaiAcRepairDetail></NikaiAcRepairDetail>           
        </div>
    );
};

export default NikaiAcRepair;