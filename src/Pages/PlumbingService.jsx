import BreadCumb from "../Components/Common/BreadCumb";
import PlumbingServiceDetail from "../Components/ServiceDetails/PlumbingServiceDetail";
const PlumbingService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/electrical-service.jpg"
                Title="AC Annual Maintenance Contract"
            ></BreadCumb> 

            <PlumbingServiceDetail /> 
        </div>
    );
};

export default PlumbingService;