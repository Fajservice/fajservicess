import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import data from '../../Data/services1.json';
import SectionTitle from "../Common/SectionTitle";
import { TbAirConditioning } from "react-icons/tb";
import { PiOvenDuotone } from "react-icons/pi";
import { LuRefrigerator } from "react-icons/lu";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { GoArrowRight, GoArrowLeft, GoArrowUpRight  } from "react-icons/go";

const iconMap = {
    "Air Conditioning Services": TbAirConditioning,
    "Commercial Refrigeration Services": LuRefrigerator,
    "Laundry Equipment Services": GiWashingMachine,
    "Coffee Machine Services": MdOutlineCoffeeMaker,
    "Kitchen Equipment Services": PiOvenDuotone,
    "Home Appliances Service Center": GrHostMaintenance
};

const Services1 = () => {

    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

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
                    <div className="cs_slider_container">
                        <div className="cs_slider_wrapper">
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                speed={600}
                                autoplay={false}
                                navigation={false}
                                allowTouchMove={true}
                                breakpoints={{
                                    575: {
                                        slidesPerView: 1,
                                        spaceBetween: 20
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 30
                                    }
                                }}
                                className="services-swiper"
                            >
                                {data && data.length > 0 && data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <ServiceCard item={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <SliderArrows onNext={handleNext} onPrev={handlePrev} />
                    </div>
                </div>
            </div>

            <div className="cs_height_80 cs_height_lg_80"></div>
        </section>
    );
};

const ServiceCard = ({ item }) => {
    const IconComponent = iconMap[item.title] || PiOvenDuotone;

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

const SliderArrows = ({ onNext, onPrev }) => (
    <div className="cs_slider_arrows cs_style_1">
        <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={onPrev}
            style={{ cursor: 'pointer' }}
        >
            <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                <i className="bi bi-arrow-left"><GoArrowLeft size={22}  /></i>
            </div>
        </div>
        <div
            className="cs_arrow_wrap cs_arrow_wrap_right cs_center"
            onClick={onNext}
            style={{ cursor: 'pointer' }}
        >
            <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                <i className="bi bi-arrow-right"><GoArrowRight   size={22}  /></i>
            </div>
        </div>
    </div>
);

const DoubleArrowIcon = () => (
    <>
        <i className="bi bi-arrow-right"><GoArrowRight   size={18}  /></i>
        <i className="bi bi-arrow-right"><GoArrowRight   size={18}  /></i>
    </>
);

export default React.memo(Services1);