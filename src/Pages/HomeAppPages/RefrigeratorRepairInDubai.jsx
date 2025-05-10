import BreadCumb from "../../Components/Common/BreadCumb";
import RefrigeratorRepairInDubaiDetails from "../../Components/ServiceDetails/HomeAppDetails/RefrigeratorRepairInDubaiDetails";

const RefrigeratorRepairInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/refrigerator.jpg"
                Title="Refrigerator Repair and Service in Dubai"
            ></BreadCumb> 
            <RefrigeratorRepairInDubaiDetails></RefrigeratorRepairInDubaiDetails>           
        </div>
    );
};

export default RefrigeratorRepairInDubai;