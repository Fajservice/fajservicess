import BreadCumb from "../../Components/Common/BreadCumb";
import NearMeDetail from "../../Components/ServiceDetails/DubaiDetails/NearMeDetail";

const NearMe = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-repair-faj.avif"
                mobileBgImg="img/banners/ac-repair-faj-mobile.avif"
                Title="AC Repair in Dubai - AC Maintenance and Service Available Near You"
            ></BreadCumb> 
            <NearMeDetail></NearMeDetail>
        </div>
    );
};

export default NearMe;