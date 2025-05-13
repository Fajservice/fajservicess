import BreadCumb from "../../Components/Common/BreadCumb";
import AppliancesMaintenanceContractDetail from "../../Components/ServiceDetails/HomeAppDetails/AppliancesMaintenanceContractDetail.jsx";

const AppliancesMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                
                bgImg="img/banners/amc.avif"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb> 
            <AppliancesMaintenanceContractDetail></AppliancesMaintenanceContractDetail>

        </div>
    );
};

export default AppliancesMaintenanceContract;