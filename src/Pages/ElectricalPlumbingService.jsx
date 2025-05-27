import BreadCumb from "../Components/Common/BreadCumb";
import ElectricalPlumbingServiceDetail from "../Components/ServiceDetails/ElectricalPlumbingServiceDetail";
const ElectricalPlumbingService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/electrical-service.jpg"
                Title="AC Annual Maintenance Contract"
            ></BreadCumb> 

            <ElectricalPlumbingServiceDetail /> 
        </div>
    );
};

export default ElectricalPlumbingService;