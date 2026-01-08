import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from "../../Data/faq.json";
import EyeIcon from "../Icons/EyeIcon";
import EyeSlashIcon from "../Icons/EyeSlashIcon";

const Faq1 = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="position-relative">
      <div className="container">
        <div className="row cs_gap_y_40 align-items-center">
          <div className="col-lg-6">
            <SectionTitle SubTitle="Our FAQ" Title="Frequently Asked Questions" />

            <div className="cs_accordians_wrapper cs_style_1">
              {data.map((item, index) => {
                const isOpen = index === openItemIndex;

                return (
                  <div
                    key={index}
                    className={`cs_accordian cs_style_1 cs_gray_bg ${isOpen ? "active" : ""}`}
                  >
                    <div
                      className="cs_accordian_head"
                      onClick={() => setOpenItemIndex(isOpen ? -1 : index)}
                    >
                      <span className="cs_fs_16 cs_semibold">{item.title}</span>
                      <span className="cs_accordian_toggle">
                        {isOpen ? <EyeSlashIcon /> : <EyeIcon />}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="cs_accordian_body" ref={accordionContentRef}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.desc.replace(/\n/g, "<br>"),
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cs_half_screen_thumbnail cs_bg_filed" data-background="img/faq_img_1.avif" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;