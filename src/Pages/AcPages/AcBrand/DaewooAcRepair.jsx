import BreadCumb from "../../../Components/Common/BreadCumb";
import DaewooAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/DaewooAcRepairDetail";

const DaewooAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/desktop/daewoo-ac-repair-faj.avif"
                mobileBgImg="img/acbrands/mobile/daewoo-ac-repair-faj.avif"
                Title="Beat the heat this summer with Expert Daewoo AC repair and service in Dubai!"
            ></BreadCumb> 
            <DaewooAcRepairDetail></DaewooAcRepairDetail>           
        </div>
    );
};

export default DaewooAcRepair;