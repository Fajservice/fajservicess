import BreadCumb from "../Components/Common/BreadCumb";
import Contact1 from "../Components/Contact/Contact";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                Title="Contact"
            ></BreadCumb> 
            <Contact1
                Title="Contact Information"
                subTitle="FAJ location is easily accessible from Al Khail Road and Sheikh Zayed Road. Drop off your appliance at the workshop to receive a discount on the technical inspection fee and service.."
                address="Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4 Dubai – United Arab Emirates."
                email="Info@fajservices.ae"
                emailLink="mailto:info@fajservices.ae"
                number="+971 4 330 0002"
                numberLink="tel:+97143300002"
                number1="+971 50 746 4712"
                number1Link="tel:+971507464712"
                clientNumber="5,400"
                img="/img/contact-us-image.jpg"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact1>           
        </div>
    );
};

export default ContactPage;