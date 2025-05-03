import BreadCumb from "../Components/Common/BreadCumb";
import CommercialCoffeeMachineRepairDetail from "../Components/ServiceDetails/CommercialCoffeeMachineRepairDetail";

const CommercialCoffeeMachineRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Commercial Coffee Machine Repair"
            ></BreadCumb> 

            <CommercialCoffeeMachineRepairDetail></CommercialCoffeeMachineRepairDetail>        
        </div>
    );
};

export default CommercialCoffeeMachineRepair;