import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from "../Components/ServiceDetails/AcServiceInDubaiDetail";

const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg={`${import.meta.env.BASE_URL}/img/page_heading_1.jpg`}
                Title="AC Service In Dubai"
            ></BreadCumb> 
            <AcServiceInDubaiDetail></AcServiceInDubaiDetail>           
        </div>
    );
};

export default AcServiceInDubai;