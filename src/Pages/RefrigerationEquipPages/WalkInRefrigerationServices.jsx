import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import WalkInRefrigerationServicesDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/WalkInRefrigerationServicesDetail.jsx";

const WalkInRefrigerationServices = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration Equipment Services/Walk-in-Refrigeration-Services.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <WalkInRefrigerationServicesDetail></WalkInRefrigerationServicesDetail>
        </div>
    ); 
};

export default WalkInRefrigerationServices;