import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairNearMeDetail from "../../Components/ServiceDetails/DubaiDetails/AcRepairNearMeDetail";

const AcRepairNearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-repair-faj.avif"
                mobileBgImg="img/banners/ac-repair-faj-mobile.avif"
                Title="AC Repair in Dubai - AC Maintenance and Service Available Near You"
            ></BreadCumb> 
            <AcRepairNearMeDetail></AcRepairNearMeDetail>
        </div>
    );
};

export default AcRepairNearMe;