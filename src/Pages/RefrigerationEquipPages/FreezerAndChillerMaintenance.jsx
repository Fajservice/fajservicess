import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import FreezerAndChillerMaintenanceDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/FreezerAndChillerMaintenanceDetail.jsx";

const FreezerAndChillerMaintenance = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration Equipment Services/Freezer-&-Chiller-Maintenance.avif"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <FreezerAndChillerMaintenanceDetail></FreezerAndChillerMaintenanceDetail>
        </div>
    ); 
};

export default FreezerAndChillerMaintenance;