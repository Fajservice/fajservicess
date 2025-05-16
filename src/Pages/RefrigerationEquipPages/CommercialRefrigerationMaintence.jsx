import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CommercialRefrigerationMaintenceDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/CommercialRefrigerationMaintenceDetail.jsx";

const CommercialRefrigerationMaintence = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration-Equipment-Services/Commercial-Refrigerator-Repair.avif"
                Title="Commercial Refrigeration Maintenance and Services"
            ></BreadCumb> 

            <CommercialRefrigerationMaintenceDetail></CommercialRefrigerationMaintenceDetail>
        </div>
    ); 
};

export default CommercialRefrigerationMaintence;