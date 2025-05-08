import BreadCumb from "../Components/Common/BreadCumb";
import CommercialDishwasherServicesDetail from "../Components/ServiceDetails/CommercialDishwasherServicesDetail.jsx";

const CommercialDishwasherServices = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/Commercial Dishwasher Services/Commercial-Dishwasher-Services.jpg"
                Title="Commercial Dishwasher Repair"
            ></BreadCumb> 

            <CommercialDishwasherServicesDetail></CommercialDishwasherServicesDetail>        
        </div>
    );
};

export default CommercialDishwasherServices;