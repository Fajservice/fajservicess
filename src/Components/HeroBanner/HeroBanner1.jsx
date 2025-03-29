import Slider from "react-slick";
import data from "/Data/herobanner1.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroBanner1 = () => {
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    // Process the image paths once when the component mounts
    const isGitHubPages = window.location.hostname.includes("github.io");
    const baseUrl = isGitHubPages ? "/fajservicess" : "";
    
    // Create modified data with fixed image paths
    const updatedData = data.map(item => {
      // Fix the path structure
      let imgPath = item.img;
      
      // If path already includes /fajservicess/ and we're on GitHub Pages, don't duplicate it
      if (isGitHubPages && !imgPath.includes("/fajservicess/")) {
        // Remove ./ or / prefix if present
        imgPath = imgPath.replace(/^\.\/|^\//, "");
        
        // Remove src/ prefix if present (since we'll use imports which start from src/)
        imgPath = imgPath.replace(/^src\//, "");
        
        // Add the base URL
        imgPath = `${baseUrl}/${imgPath}`;
      }
      
      return {
        ...item,
        processedImg: imgPath
      };
    });
    
    setProcessedData(updatedData);
  }, []);

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  return (
    <section className="cs_slider cs_style_1">
      <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="900" data-center="0" data-variable-width="0" data-slides-per-view="1">
        <div className="cs_slider_wrapper">
          <Slider {...settings}>
            {processedData.map((item, index) => (
              <div key={index} className="cs_slide">
                <div 
                  className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" 
                  style={{ backgroundImage: `url(${item.processedImg})` }}
                >
                  <div className="container">
                    <div className="cs_hero_text">
                      <h1 className="cs_hero_title cs_fs_50 cs_mb_18 wow fadeInUp">{item.title}</h1>
                      <p className="cs_hero_subtitle cs_mb_34">{item.desc}</p>
                      <div className="cs_hero_btns">
                        <Link to={item.btnUrl} className="cs_btn cs_style_1 wow fadeInLeft">
                          <span>{item.btnName}</span>
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                        <span className="cs_hero_number wow fadeInRight">
                          <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                            <i className="bi bi-telephone-x-fill"></i>
                          </span>
                          <a href={item.telLink} className="cs_fs_24 cs_semibold cs_heading_color">{item.number}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;