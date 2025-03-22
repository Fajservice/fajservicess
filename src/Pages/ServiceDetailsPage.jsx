import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

const ServiceDetailsPage = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Service Details"
            ></BreadCumb> 
            <ServiceDetails></ServiceDetails>           
        </div>
    );
};

export default ServiceDetailsPage;