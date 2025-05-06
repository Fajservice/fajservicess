import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DeepFryerServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DeepFryerServiceDetail.jsx";

const DeepFryerService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <DeepFryerServiceDetail></DeepFryerServiceDetail>
        </div>
    ); 
};

export default DeepFryerService;