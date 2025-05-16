import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import RefrigerationAMCServicesDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/RefrigerationAMCServicesDetail.jsx";

const RefrigerationAMCServices = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration-Equipment-Services/Refrigeration-AMC-Services.avif"

                Title="Commercial Refrigeration Maintenance Contract Services"
            ></BreadCumb> 

            <RefrigerationAMCServicesDetail></RefrigerationAMCServicesDetail>
        </div>
    ); 
};

export default RefrigerationAMCServices;