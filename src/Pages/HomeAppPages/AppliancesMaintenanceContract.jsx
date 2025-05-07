import BreadCumb from "../../Components/Common/BreadCumb";
import AppliancesMaintenanceContractDetail from "../../Components/ServiceDetails/HomeAppDetails/AppliancesMaintenanceContractDetail.jsx";

const AppliancesMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/Oven-Repair-Service.jpg"
                Title="Gas & Electrical Oven Repair Service in Dubai"
            ></BreadCumb> 
            <AppliancesMaintenanceContractDetail></AppliancesMaintenanceContractDetail>

        </div>
    );
};

export default AppliancesMaintenanceContract;