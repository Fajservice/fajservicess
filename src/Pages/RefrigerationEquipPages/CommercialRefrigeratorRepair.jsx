import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CommercialRefrigeratorRepairDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/CommercialRefrigeratorRepairDetail.jsx";

const CommercialRefrigeratorRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration Equipment Services/Commercial-Refrigerator-Repair.avif"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <CommercialRefrigeratorRepairDetail></CommercialRefrigeratorRepairDetail>
        </div>
    ); 
};

export default CommercialRefrigeratorRepair;