import BreadCumb from "../Components/Common/BreadCumb";
import RefrigeratorRepairInDubaiDetails from "../Components/ServiceDetails/RefrigeratorRepairInDubaiDetails";

const RefrigeratorRepairInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                Title="Refrigerator Repair Service Dubai"
            ></BreadCumb> 
            <RefrigeratorRepairInDubaiDetails></RefrigeratorRepairInDubaiDetails>           
        </div>
    );
};

export default RefrigeratorRepairInDubai;