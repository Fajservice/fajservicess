import BreadCumb from "../../../Components/Common/BreadCumb";
import SanyoAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/SanyoAcRepairDetail";

const SanyoAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Sanyo-Ac-Repair-faj.avif"
                Title="Sanyo AC Repair in Dubai - Air Conditioner Service Near Me"
            ></BreadCumb> 
            <SanyoAcRepairDetail></SanyoAcRepairDetail>           
        </div>
    );
};

export default SanyoAcRepair;