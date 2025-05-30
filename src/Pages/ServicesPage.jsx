import BreadCumb from "../Components/Common/BreadCumb";
import Services3 from "../Components/Services/Services3";


const ServicesPage = () => {
    return (
        <div className="servicepage">
            <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title="Services"
            ></BreadCumb>
            <Services3></Services3>
        </div>
    );
};

export default ServicesPage;