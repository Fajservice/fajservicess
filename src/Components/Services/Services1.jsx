import { Link } from "react-router-dom";
import Slider from "react-slick";
import data from '../../Data/services1.json';
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

const Services1 = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };

    const settings = {
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
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    return (

        <section className="cs_gray_bg cs_bg_filed position-relative" data-src="assets/img/service_bg_1.jpg">
          <div className="cs_height_120 cs_height_lg_80"></div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
              <div className="cs_section_heading_left">
                <SectionTitle
                    SubTitle="Best Services"
                    Title="Where Your Car Gets Pride the Best Care"
                ></SectionTitle>
              </div>
              <div className="cs_section_heading_right mb-0 wow fadeInDown">Regular tire rotation ensures even wear, extending the life of your tires and improving vehicle performance If your car struggles to start, the lights dim when idling or the battery is over</div>
            </div>
            </div>
            <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
              <div className="container">
            <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
            data-variable-width="0" data-xs-slides="1" data-sm-slides="2" data-md-slides="2" data-lg-slides="3"
            data-add-slides="3" data-slides-per-view="responsive">
            <div className="cs_slider_wrapper">
            <Slider ref={sliderRef} {...settings}>
            {data.map((item, index)=>(
              <div key={index} className="cs_slide">
                <div className="cs_card cs_style_1">
                  <div className="cs_card_thumbnail">
                    <img src={item.img} alt="Service Image" />
                  </div>
                  <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                    <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                      <img src={item.icon} alt="Service Icon" />
                    </div>
                    <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                      <Link to={item.btnLink}>{item.title}</Link></h3>
                    <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                    <Link to={item.btnLink} className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
                      <span className="cs_btn_text text-uppercase">{item.btnText}</span>
                      <span className="cs_btn_icon cs_center">
                      <i className="bi bi-arrow-right"></i>
                      <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              ))}
              </Slider>
            </div>
            <div className="cs_slider_arrows cs_style_1">
              <div className="cs_arrow_wrap cs_arrow_wrap_left cs_center" onClick={previous}>
                <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                    <i className="bi bi-arrow-left"></i>
                </div>
              </div>
              <div className="cs_arrow_wrap cs_arrow_wrap_right cs_center" onClick={next}>
                <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="cs_height_120 cs_height_lg_80"></div>
         </section>
    );
};

export default Services1;