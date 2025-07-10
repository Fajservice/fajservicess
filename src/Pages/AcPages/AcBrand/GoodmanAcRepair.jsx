import BreadCumb from "../../../Components/Common/BreadCumb";
import GoodmanAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/GoodmanAcRepairDetail";

const GoodmanAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/goodman-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/goodman-ac-repair-faj.avif"
                Title="Goodman AC Maintenance Services in Dubai​"
            ></BreadCumb> 
            <GoodmanAcRepairDetail></GoodmanAcRepairDetail>           
        </div>
    );
};

export default GoodmanAcRepair;