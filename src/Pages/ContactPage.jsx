import BreadCumb from "../Components/Common/BreadCumb";
import Contact from "../Components/Contact/Contact";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                Title="Contact"
            ></BreadCumb> 
            <Contact
                Title="Contact Information"
                subTitle="It is a long established fact that a reader be by the readable distracted  layout."
                address="Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4 Dubai – United Arab Emirates."
                email="Info@fajservcies.ae"
                emailLink="mailto:info@fajservices.ae"
                number="+971 4 330 0002"
                numberLink="tel:+97143300002"
                number1="+971 50 746 4712"
                number1Link="tel:+971507464712"
                clientNumber="5,400"
                img="/img/contact_img_1.jpg"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact>           
        </div>
    );
};

export default ContactPage;