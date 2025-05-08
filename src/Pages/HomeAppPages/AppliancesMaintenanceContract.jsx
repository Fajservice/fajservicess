import BreadCumb from "../../Components/Common/BreadCumb";
import AppliancesMaintenanceContractDetail from "../../Components/ServiceDetails/HomeAppDetails/AppliancesMaintenanceContractDetail.jsx";

const AppliancesMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/amc.jpg"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb> 
            <AppliancesMaintenanceContractDetail></AppliancesMaintenanceContractDetail>

        </div>
    );
};

export default AppliancesMaintenanceContract;