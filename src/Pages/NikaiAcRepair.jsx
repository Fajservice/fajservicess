import BreadCumb from "../Components/Common/BreadCumb";
import NikaiAcRepairDetail from "../Components/ServiceDetails/NikaiAcRepairDetail";

const NikaiAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/acbrands/Nikai-AC-bg.jpg"
                // bgImg="/img/ac_service-bannerbg.jpg"
                Title="Nikai AC Repair in Dubai - Air Conditioner Maintenance Near Me"
            ></BreadCumb> 
            <NikaiAcRepairDetail></NikaiAcRepairDetail>           
        </div>
    );
};

export default NikaiAcRepair;