import BreadCumb from "../Components/Common/BreadCumb";
import AcAnnualMaintenanceContractDetail from "../Components/ServiceDetails/AcDetail/AcAnnualMaintenanceContractDetail";

const AcAnnualMaintenanceContract = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="AC Annual Maintenance Contract Service Dubai - AC AMC Services"
            ></BreadCumb> 

            <AcAnnualMaintenanceContractDetail /> 
        </div>
    );
};

export default AcAnnualMaintenanceContract;