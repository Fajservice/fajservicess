import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Brand1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cs_brands_area">
        <div className="container">
          <div className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed" data-background={`${import.meta.env.BASE_URL}img/brand_bg_1.svg`}>
            <div className="cs_brand">
                <img src={`${import.meta.env.BASE_URL}img/companylogos/airforce.avif`} alt="Air Force" />
            </div>
            <div className="cs_brand">
                <img src={`${import.meta.env.BASE_URL}img/companylogos/al-rawabi.avif`} alt="Al Rawabi" />
            </div>
            <div className="cs_brand">
                <img src={`${import.meta.env.BASE_URL}img/companylogos/dubai properties.avif`} alt="Dubai Properties" />
            </div>
            <div className="cs_brand">
                <img src={`${import.meta.env.BASE_URL}img/companylogos/fawaz.avif`} alt="Fawaz" />
            </div>
            <div className="cs_brand">
                <img src={`${import.meta.env.BASE_URL}img/companylogos/transguard.avif`} alt="Transguard" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand1;