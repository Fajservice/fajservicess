import BreadCumb from "../Components/Common/BreadCumb";
import MEPServiceDetail from "../Components/ServiceDetails/MEPServiceDetail";
const MEPService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/electrical-service.jpg"
                Title="AC Annual Maintenance Contract"
            ></BreadCumb> 

            <MEPServiceDetail /> 
        </div>
    );
};

export default MEPService;