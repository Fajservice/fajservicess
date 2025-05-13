import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DeepFryerServiceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DeepFryerServiceDetail.jsx";

const DeepFryerService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen equipments/deep-fryer.avif"
                Title="Deep Fryer Service"
            ></BreadCumb> 

            <DeepFryerServiceDetail></DeepFryerServiceDetail>        
        </div>
    );
};

export default DeepFryerService;