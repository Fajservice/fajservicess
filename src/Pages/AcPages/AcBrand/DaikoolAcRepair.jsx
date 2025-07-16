import BreadCumb from "../../../Components/Common/BreadCumb";
import DaikoolAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaikoolAcRepairDetail";

const DaikoolAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/daikool-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/daikool-ac-repair-faj.avif"
                Title="Daikool AC Repair in Dubai - Air Conditioning Service Near Me"
            ></BreadCumb>
            <DaikoolAcRepairDetail></DaikoolAcRepairDetail>
        </div>
    );
};

export default DaikoolAcRepair;