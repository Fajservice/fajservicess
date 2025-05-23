import BreadCumb from "../Components/Common/BreadCumb";
import AcAnnualMaintenanceContractDetail from "../Components/ServiceDetails/AcDetail/AcAnnualMaintenanceContractDetail";

const AcAnnualMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/annual-maintenance-contractAMC.avif"
                Title="AC Annual Maintenance Contract"
            ></BreadCumb> 

            <AcAnnualMaintenanceContractDetail /> 
        </div>
    );
};

export default AcAnnualMaintenanceContract;