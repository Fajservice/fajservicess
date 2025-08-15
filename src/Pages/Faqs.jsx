import BreadCumb from "../Components/Common/BreadCumb";
import FaqsDetail from "../Components/ServiceDetails/FaqsDetail";

const Faqs = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-repair-faj.avif"
                mobileBgImg="img/banners/ac-repair-faj-mobile.avif"
                Title="AC Repair in Dubai - AC Maintenance and Service Available Near You"
            ></BreadCumb> 
            <FaqsDetail></FaqsDetail>
        </div>
    );
};

export default Faqs;