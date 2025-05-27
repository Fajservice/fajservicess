import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import WashingMachineRepairNearMeDetail from "../../Components/ServiceDetails/DubaiDetails/WashingMachineRepairNearMeDetail.jsx";

const WashingMachineRepairNearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-repair-faj.avif"
                mobileBgImg="img/banners/ac-repair-faj-mobile.avif"
                Title="AC Repair in Dubai - AC Maintenance and Service Available Near You"
            ></BreadCumb> 
            <WashingMachineRepairNearMeDetail></WashingMachineRepairNearMeDetail>
        </div>
    );
};

export default WashingMachineRepairNearMe;