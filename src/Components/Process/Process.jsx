import { useEffect, useState } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
const Process = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/process.json`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load process.json");
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <section
      className="cs_bg_filed"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/processbg.jpg)`
      }}
    >
      <div className="cs_height_80 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <SectionTitle2
            SubTitle="Our Values"
            Title="Our Professional Working Process"
          />
        </div>

        <p className="text-center cs_mb_47">
          Our beliefs drive our actions, while our convictions define our purpose and passion.
        </p>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className="cs_card cs_style_3 position-relative">
                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                  <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.img}`}
                      loading="lazy"
                      width="64"
                      height="64"
                      alt={item.title}
                    />
                  </div>
                  <h3 className="cs_fs_24 cs_semibold cs_mb_10">{item.title}</h3>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default Process;
