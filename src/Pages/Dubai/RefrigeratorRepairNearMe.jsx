import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import RefrigeratorRepairNearMeDetail from "../../Components/ServiceDetails/DubaiDetails/RefrigeratorRepairNearMeDetail.jsx";

const RefrigeratorRepairNearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-repair-faj.avif"
                mobileBgImg="img/banners/ac-repair-faj-mobile.avif"
                Title="AC Repair in Dubai - AC Maintenance and Service Available Near You"
            ></BreadCumb> 
            <RefrigeratorRepairNearMeDetail></RefrigeratorRepairNearMeDetail>
        </div>
    );
};

export default RefrigeratorRepairNearMe;