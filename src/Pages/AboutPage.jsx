import About1 from "../Components/About/About1";
import Brand1 from "../Components/Brand/Brand1";
import BreadCumb from "../Components/Common/BreadCumb";
import Process2 from "../Components/Process/Process2";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const AboutPage = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/img/page_heading_1.jpg"
                Title="About Us"
            ></BreadCumb>            
            <About1
                img1="/img/about_img_1.jpg"
                img2="/img/about_img_2.jpg"
                img3="/img/about_img_3.jpg"
                expNumber="FAJ"
                expYers="was established"
                expTitle="Since-"
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
            <Testimonial2></Testimonial2>
            <Brand1></Brand1>
            <Process2></Process2>
            <Team1></Team1>
        </div>
    );
};

export default AboutPage;