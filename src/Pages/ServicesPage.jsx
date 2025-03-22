import BreadCumb from "../Components/Common/BreadCumb";
import Form2 from "../Components/Form/Form2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Services3 from "../Components/Services/Services3";
import Video1 from "../Components/Video/Video1";

const ServicesPage = () => {
    return (
        <div className="servicepage">
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Services"
            ></BreadCumb>
            <Services3></Services3>
            <Video1></Video1>
            <Form2></Form2>
            <Pricing1></Pricing1>
        </div>
    );
};

export default ServicesPage;