import BreadCumb from "../../Components/Common/BreadCumb";
import AppliancesMaintenanceContractDetail from "../../Components/ServiceDetails/HomeAppDetails/AppliancesMaintenanceContractDetail.jsx";

const AppliancesMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb

                bgImg="img/banners/kitchen-equipments-and-appliances-amc.avif"
                mobileBgImg="img/banners/kitchen-equipments-and-appliances-amc-mobile.avif"
                Title="KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES"
            ></BreadCumb>
            <AppliancesMaintenanceContractDetail></AppliancesMaintenanceContractDetail>

        </div>
    );
};

export default AppliancesMaintenanceContract;