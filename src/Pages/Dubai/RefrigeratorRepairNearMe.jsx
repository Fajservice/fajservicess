import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import RefrigeratorRepairNearMeDetail from "../../Components/ServiceDetails/DubaiDetails/RefrigeratorRepairNearMeDetail.jsx";

const RefrigeratorRepairNearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/refrigerator.avif"
                mobileBgImg="img/banners/refrigerater-banner.avif"
                Title="Refrigerator Repair Near Me - Appliance Repair Near Me - FAJ"
            ></BreadCumb>
            <RefrigeratorRepairNearMeDetail></RefrigeratorRepairNearMeDetail>
        </div>
    );
};

export default RefrigeratorRepairNearMe;