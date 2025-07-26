import React, { useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from '../../Data/services1.json';
import SectionTitle from "../Common/SectionTitle";
import { TbAirConditioning } from "react-icons/tb";
import { PiOvenDuotone } from "react-icons/pi";
import { LuRefrigerator } from "react-icons/lu";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
const iconMap = {
    "Air Conditioning Services": TbAirConditioning,
    "Commercial Refrigeration Services": LuRefrigerator,
    "Laundry Equipment Services": GiWashingMachine,
    "Coffee Machine Services": MdOutlineCoffeeMaker,
    "Kitchen Equipment Services":PiOvenDuotone,
    "Home Appliances Service Center": GrHostMaintenance
};

const Services1 = () => {
    const sliderRef = useRef(null);

    const sliderControls = {
        next: () => sliderRef.current.slickNext(),
        previous: () => sliderRef.current.slickPrev()
    };

    const sliderSettings = useMemo(() => ({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1199,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 575,
                settings: { slidesToShow: 1 }
            }
        ]
    }), []);

    return (
        <section className="cs_gray_bg cs_bg_filed position-relative" data-src="assets/img/service_bg_1.avif">
            <div className="cs_height_80 cs_height_lg_80"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
                    <div className="cs_section_heading_left">
                        <SectionTitle
                            SubTitle="Best Services"
                            Title="FIND A WIDE VARIETY OF EXCELLENT SERVICES FOR HOME AND BUSINESS."
                        />
                    </div>
                    <div className="cs_section_heading_right mb-0 wow fadeInDown">
                        We exceed your expectations through trusted service. At FAJ, we specialize in technical services, 
                        maintenance, repair, and installation for all clients. We take pride in delivering solutions with 
                        expertise, teamwork, and a strong focus on customer satisfaction.
                    </div>
                </div>
            </div>
            
            <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
                <div className="container">
                    <div 
                        className="cs_slider_container" 
                        data-autoplay="0" 
                        data-loop="1" 
                        data-speed="600" 
                        data-center="0"
                        data-variable-width="0" 
                        data-xs-slides="1" 
                        data-sm-slides="2" 
                        data-md-slides="2" 
                        data-lg-slides="3"
                        data-add-slides="3" 
                        data-slides-per-view="responsive"
                    >
                        <div className="cs_slider_wrapper">
                            <Slider ref={sliderRef} {...sliderSettings}>
                                {data.map((item, index) => (
                                    <ServiceCard key={index} item={item} />
                                ))}
                            </Slider>
                        </div>
                        
                        <SliderArrows onClick={sliderControls} />
                    </div>
                </div>
            </div>
            
            <div className="cs_height_80 cs_height_lg_80"></div>
        </section>
    );
};

const ServiceCard = ({ item }) => {
    // Get the appropriate icon component based on the service title
    const IconComponent = iconMap[item.title] || PiOvenDuotone; // Fallback to home icon
    
    return (
        <div className="cs_slide">
            <div className="cs_card cs_style_1">
                <div className="cs_card_thumbnail">
                    <img 
                        src={`${import.meta.env.BASE_URL}${item.img}`} 
                        loading="lazy" 
                        alt={item.title} 
                    />
                </div>
                <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                    <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                        <IconComponent size={70} className="cs_react_icon text-white" />
                    </div>
                    <h3 className="cs_card_title cs_fs_20 cs_mb_8">
                        <Link to={item.btnLink}>{item.title}</Link>
                    </h3>
                    <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                    <Link to={item.btnLink} className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                        <span className="cs_btn_text text-uppercase">{item.btnText}</span>
                        <span className="cs_btn_icon cs_center">
                            <DoubleArrowIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const SliderArrows = ({ onClick }) => (
    <div className="cs_slider_arrows cs_style_1">
        <div className="cs_arrow_wrap cs_arrow_wrap_left cs_center" onClick={onClick.previous}>
            <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                <i className="bi bi-arrow-left"></i>
            </div>
        </div>
        <div className="cs_arrow_wrap cs_arrow_wrap_right cs_center" onClick={onClick.next}>
            <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                <i className="bi bi-arrow-right"></i>
            </div>
        </div>
    </div>
);

const DoubleArrowIcon = () => (
    <>
        <i className="bi bi-arrow-right"></i>
        <i className="bi bi-arrow-right"></i>
    </>
);

export default React.memo(Services1);