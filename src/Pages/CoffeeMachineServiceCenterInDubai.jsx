import BreadCumb from "../Components/Common/BreadCumb";
import CoffeeMachineServiceCenterInDubaiDetail from "../Components/ServiceDetails/CoffeeMachineServiceCenterInDubaiDetail";

const CoffeeMachineServiceCenterInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Coffee Machine Service Center Dubai Across Sharjah - Abu Dhabi"
            ></BreadCumb> 

            <CoffeeMachineServiceCenterInDubaiDetail></CoffeeMachineServiceCenterInDubaiDetail>        
        </div>
    );
};

export default CoffeeMachineServiceCenterInDubai;