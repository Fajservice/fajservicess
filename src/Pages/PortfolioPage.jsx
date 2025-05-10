import BreadCumb from "../Components/Common/BreadCumb";
import PortfolioDetail from "../Components/ServiceDetails/PortfolioDetail";

const PortfolioPage = () => {
    return (
        <div>
           <BreadCumb
                bgImg="img/banners/Portfolio.jpg"
                Title="Our Portfolio"
            ></BreadCumb>     
            <PortfolioDetail />      
        </div>
    );
};

export default PortfolioPage;