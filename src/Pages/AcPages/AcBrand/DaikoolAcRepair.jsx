import BreadCumb from "../../../Components/Common/BreadCumb";
import DaikoolAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaikoolAcRepairDetail";

const DaikoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/daikool-ac-repair-faj.avif"
                // bgImg="img/ac_service-bannerbg.avif"
                Title="Daikool AC Repair in Dubai - Air Conditioning Service Near Me"
            ></BreadCumb> 
            <DaikoolAcRepairDetail></DaikoolAcRepairDetail>           
        </div>
    );
};

export default DaikoolAcRepair;