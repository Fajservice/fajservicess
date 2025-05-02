import BreadCumb from "../Components/Common/BreadCumb";
import OvenRepairServiceDetail from "../Components/ServiceDetails/OvenRepairServiceDetail";

const OvenRepairService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Gas & Electrical Oven Repair Service"
            ></BreadCumb> 

            <OvenRepairServiceDetail></OvenRepairServiceDetail>        
        </div>
    );
};

export default OvenRepairService;