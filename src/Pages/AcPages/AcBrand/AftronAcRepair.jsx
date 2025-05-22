import BreadCumb from "../../../Components/Common/BreadCumb";
import AftronAcRepairDetail from "../../../Components/ServiceDetails/AcDetail/AcBrand/AftronAcRepairDetail";

const AftronAcRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/acbrands/Aftron-Ac-repair-faj.avif"
                Title="Aftron AC Repair Maintenance Service In Dubai"
            ></BreadCumb> 
            <AftronAcRepairDetail></AftronAcRepairDetail>           
        </div>
    );
};

export default AftronAcRepair;