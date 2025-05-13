import BreadCumb from "../../Components/Common/BreadCumb";
import BBQServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/BBQServiceDetail";

const BBQService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="img/page_heading_1.avif"
                bgImg="img/banners/BBQ.avif"
                Title="Barbecue Repair – Best BBQ Grill Cleaning Service Dubai"
            ></BreadCumb> 
            <BBQServiceDetail></BBQServiceDetail>

        </div>
    );
};

export default BBQService;