import BreadCumb from "../Components/Common/BreadCumb";
import ElectricalServiceDetail from "../Components/ServiceDetails/ElectricalServiceDetail";
const ElectricalService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/electrical-service.jpg"
                Title="AC Annual Maintenance Contract"
            ></BreadCumb> 

            <ElectricalServiceDetail /> 
        </div>
    );
};

export default ElectricalService;