import BreadCumb from "../../Components/Common/BreadCumb";
import CigarcabnitServiceDetail from "../../Components/ServiceDetails/HomeAppDetails/CigarcabnitServiceDetail";

const CigarcabnitService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/Cigar-cabnet.jpg"
                Title="Cigar Cabinet Humidifier Repair Across Dubai - Sharjah - Abu Dhabi"
            ></BreadCumb> 
            <CigarcabnitServiceDetail></CigarcabnitServiceDetail>

        </div>
    );
};

export default CigarcabnitService;