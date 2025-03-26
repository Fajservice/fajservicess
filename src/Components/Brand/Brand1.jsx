import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Brand1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="cs_brands_area">
        <div className="container">
          <div className="cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed" data-background="/fajservicess/src/assets/img/brand_bg_1.svg">
            <div className="cs_brand wow zoomIn">
                <img src="/assets/imgbrand1.png" alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
                <img src="/assets/imgbrand2.png" alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
                <img src="/assets/imgbrand3.png" alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
                <img src="/assets/imgbrand4.png" alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
                <img src="/assets/imgbrand5.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Brand1;