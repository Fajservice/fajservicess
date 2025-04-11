import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairDubaiDetail from "../Components/ServiceDetails/AcRepairDubaiDetail";

const AcRepairDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="AC Repair in Dubai - Air Conditioner Repair and Service Near Me"
            ></BreadCumb> 
            <AcRepairDubaiDetail></AcRepairDubaiDetail>        
        </div>
    );
};

export default AcRepairDubai;