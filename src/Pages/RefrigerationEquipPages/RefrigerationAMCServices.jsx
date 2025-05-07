import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import RefrigerationAMCServicesDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/RefrigerationAMCServicesDetail.jsx";

const RefrigerationAMCServices = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <RefrigerationAMCServicesDetail></RefrigerationAMCServicesDetail>
        </div>
    ); 
};

export default RefrigerationAMCServices;