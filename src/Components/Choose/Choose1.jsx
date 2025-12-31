import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { IoIosArrowRoundForward } from "react-icons/io";

const Choose1 = ({ img1, content, btnName, btnUrl, img2, img3 }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/choose.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <div className="cs_height_80 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <SectionTitle2 SubTitle="WHY CHOOSE US" />
          {content && (
            <p className="cs_section_content mt-3">{content}</p>
          )}
        </div>

        <div className="cs_height_27 cs_height_lg_65"></div>

        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-4">
            <div className="cs_features_thumbnail_1 position-relative">
              <img src={`${import.meta.env.BASE_URL}${img1}`} alt="Feature" />
            </div>
          </div>

          <div className="col-xl-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.map((item, i) => (
                <div key={i} className="cs_iconbox cs_style_2">
                  <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.img}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_iconbox_title cs_fs_18 cs_bold cs_mb_2">
                      {item.title}
                    </h3>
                    <p className="cs_iconbox_subtitle cs_fs_14 mb-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))
            )}

            <Link to={btnUrl} className="cs_btn cs_style_1 mt-2">
              <span>{btnName}</span>
              <IoIosArrowRoundForward style={{ fontSize: 28 }} />
            </Link>
          </div>

          <div className="col-xl-4">
            <div className="cs_features_thumbnail_2 position-relative">
              <img src={`${import.meta.env.BASE_URL}${img2}`} alt="Feature" />
              <div className="cs_features_thumbnail_3">
                <img src={`${import.meta.env.BASE_URL}${img3}`} alt="Feature" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_70 cs_height_lg_70"></div>
    </section>
  );
};

export default Choose1;