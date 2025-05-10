import BreadCumb from "../../../Components/Common/BreadCumb";
import DaikoolAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaikoolAcRepairDetail";

const DaikoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Daikool-AC-bg.jpg"
                // bgImg="img/ac_service-bannerbg.jpg"
                Title="Daikool AC Repair in Dubai - Air Conditioning Service Near Me"
            ></BreadCumb> 
            <DaikoolAcRepairDetail></DaikoolAcRepairDetail>           
        </div>
    );
};

export default DaikoolAcRepair;