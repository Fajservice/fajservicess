import BreadCumb from "../Components/Common/BreadCumb";
import CoffeeMachineServiceCenterInDubaiDetail from "../Components/ServiceDetails/CoffeeMachineServiceCenterInDubaiDetail";

const CoffeeMachineServiceCenterInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Coffee Machine Service Center in Dubai "
            ></BreadCumb> 

            <CoffeeMachineServiceCenterInDubaiDetail></CoffeeMachineServiceCenterInDubaiDetail>        
        </div>
    );
};

export default CoffeeMachineServiceCenterInDubai;