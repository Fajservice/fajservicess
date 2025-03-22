import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import Brand1 from "../Components/Brand/Brand1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Form2 from "../Components/Form/Form2";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import Project2 from "../Components/Project/Project2";
import Services2 from "../Components/Services/Services2";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import Video1 from "../Components/Video/Video1";

const Home2 = () => {
    return (
        <div className="homepage2">
            <HeroBanner2
                bgimg="/assets/img/hero_bg_1.jpg"
                subtitle="Battery Check & Replace"
                title="Your Car’s Health is Our Mission"
                conetnt="Repair times vary depending on the service, but most
            standard repairs are completed within a few hours your satisfaction and peace of mind."
                btnname="Read more"
                btnurl="/about"
                videoname="Watch Our Story"
            ></HeroBanner2>
            <About2
                img1="/assets/img/about_img_4.jpg"
                img2="/assets/img/about_img_5.jpg"
                expNumber="58"
                expTitle="EXPER"
                exYear="STA 1980"
                subTitle="About Us"
                Title="Where Your Car the Best Care Every Time"
                Content="Globally maintain high payoff collaboration and idea sharing after viral solutions car as Objectively leading are mindshare rather than premier testing pursue professional you customer service revolutinary services drive"
                box1="Brake Master Service"
                boxContent1="Squeaking, grinding noises, or a soft brake pedal are common signs Kind warranty on most services."
                box2="Engine Diagnostics"
                boxContent2="Slow engine crank, dim headlights, and a battery warning light are kinds typical signs."
                avatar="/assets/img/avatar_1.png"
                name="Ronald Richards"
                designation="Founder CEO"
            ></About2>
            <Services2></Services2>
            <Faq1></Faq1>
            <Video1></Video1>
            <Form2></Form2>
            <Team1></Team1>
            <Testimonial2></Testimonial2>
            <Brand1></Brand1>
            <Project2></Project2>
            <Counter1></Counter1>
            <Blog2></Blog2>
        </div>
    );
};

export default Home2;