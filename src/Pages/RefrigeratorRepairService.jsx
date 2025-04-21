import BreadCumb from "../Components/Common/BreadCumb";
import RefrigeratorRepairServiceDetails from "../Components/ServiceDetails/RefrigeratorRepairServiceDetails";

const RefrigeratorRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                Title="Reliable Fridge and Refrigerator Repair Dubai"
            ></BreadCumb> 
            <RefrigeratorRepairServiceDetails></RefrigeratorRepairServiceDetails>           
        </div>
    );
};

export default RefrigeratorRepairService;