import BreadCumb from "../Components/Common/BreadCumb";
import FajPriceListDetail from "../Components/ServiceDetails/FajPriceListDetail";

const FajPriceListPage = () => {
    return (
        <div>
           <BreadCumb
                bgImg="img/banners/Portfolio.avif"
                Title="FAJ Price List"
            ></BreadCumb>     
            <FajPriceListDetail />      
        </div>
    );
};

export default FajPriceListPage;