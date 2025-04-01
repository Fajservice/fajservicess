import About1 from "../Components/About/About1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import Blog3 from "../Components/Blog/Blog3";
import Choose1 from "../Components/Choose/Choose1";
import Contact1 from "../Components/ContactInfo/Contact1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Process from "../Components/Process/Process";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

import Before from '/img/before_img_1.jpg';
import After from '/img/after_img_1.jpg';
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>test home</title>
        </Helmet>
        <div className="homepage">
            <HeroBanner1></HeroBanner1>
            <About1
                img1="/fajservicess/src/assets/img/about_img_1.jpg"
                img2="/fajservicess/src/assets/img/about_img_2.jpg"
                img3="/fajservicess/src/assets/img/about_img_3.jpg"
                expNumber="FAJ"
                expYers="was established"
                expTitle="in-"
                expTitleYear="2010"
                expDescrip="And is dedicated to delivering exceptional service that meets the highest international standards."
                number="(+971) 4-330-0002"
                telLink="tel:+97143300002"
                subTitle="About Us"
                Title="Speedy Services, Quality Results"
                Content="We are professional and committed to service, highlighting our dedication to providing exceptional results in repair, servicing, and maintenance contracts."
                feature1="Routine Maintenance, Let's Start Today"
                feature2="Fast, Efficient Repair Service"
                listItem={[
                    "Efficiency through expert maintenance",
                    "Expertise. Integrity. Responsiveness",
                    "Comprehensive Diagnostic Check",
                    "Quality workmanship",
                    "Guaranteed Work",
                ]}
                
            ></About1>
            <Services1></Services1>
            <Choose1
                img1="/fajservicess/src/assets/img/feature_img_1.jpg"
                content="Squeaking, grinding noises, or a spongy brake pedal are car common indicators that your brakes need attention Slow an  engine cranking."
                btnName="Read more"
                btnUrl="/about"
                img2="/fajservicess/src/assets/img/feature_img_2.jpg"
                img3="/fajservicess/src/assets/img/feature_img_3.jpg"
            ></Choose1>
            <BeforeAfter 
                title="Recent Completed Projects"
                subTitle="Before & after"
                bgImg="/fajservicess/src/assets/img/before_after_bg_1.svg"
                beforeImg={After}
                afterTitle="After"
                afterImg={Before}
                beforeTitle="Before"
            ></BeforeAfter>
            <Project1></Project1>
            <Contact1
                Title="Contact Information"
                subTitle="It is a long established fact that a reader be by the readable distracted  layout."
                address="2972 Westheimer Rd. <br/>Santa Ana, Illinois 5486"
                email="Cripar@gmail.com <br/>InfoCripar@gmal.com"
                number="(402) 4521 5458 44 <br/> (123) 2154 5464 55"
                clientNumber="5,400"
                img="/fajservicess/src/assets/img/contact_img_1.jpg"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book and Appointment"
            ></Contact1>
            <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="/fajservicess/src/assets/img/testimonial_bg_1.jpg"
            ></Testimonial1>
            <Pricing1></Pricing1>
            <Process></Process>
            <Blog3></Blog3>
        </div>
        </>
        
    );
};

export default Home;