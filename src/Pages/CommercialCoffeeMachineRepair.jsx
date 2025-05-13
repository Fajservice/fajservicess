import BreadCumb from "../Components/Common/BreadCumb";
import CommercialCoffeeMachineRepairDetail from "../Components/ServiceDetails/CommercialCoffeeMachineRepairDetail";

const CommercialCoffeeMachineRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/commercial-coffee-machine-services.avif"
                Title="Commercial Coffee Machine Repair"
            ></BreadCumb> 

            <CommercialCoffeeMachineRepairDetail></CommercialCoffeeMachineRepairDetail>        
        </div>
    );
};

export default CommercialCoffeeMachineRepair;