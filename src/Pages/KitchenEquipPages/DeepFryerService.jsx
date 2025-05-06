import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DeepFryerServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DeepFryerServiceDetail.jsx";

const DeepFryerService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Deep Fryer Service"
            ></BreadCumb> 

            <DeepFryerServiceDetail></DeepFryerServiceDetail>        
        </div>
    );
};

export default DeepFryerService;