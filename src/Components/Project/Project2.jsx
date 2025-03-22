import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/project2.json';
import { Link } from "react-router-dom";

const Project2 = () => {
    return (
        <section className="cs_tabs cs_style_1 position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_left">
                <SectionTitle
                    SubTitle="Popular Project"
                    Title="Where Your Car Gets Pride the Best Care"               
                ></SectionTitle>
            </div>
          </div>
          <ul className="cs_tab_links cs_style_1 cs_type_2 cs_heading_color cs_mp_0 wow fadeInUp">
            <li className="active"><Link to="/project">View All Project</Link></li>
          </ul>
          <div className="cs_height_60"></div>
          <div className="cs_portfolio_body">
            <div className="cs_portfolio ">
              <div className="cs_cards_grid cs_style_1">
              {data.map((item, i) => (
                <div key={i} className="cs_card cs_style_5 position-relative">
                  <div className="cs_card_thumbnail">
                    <img src={item.img} alt="Portfolio Image" />
                  </div>
                  <div className="cs_card_info_wrapper cs_heading_bg position-absolute">
                    <div className="cs_portfolio_text">
                      <h3 className="cs_fs_20 cs_semibold cs_white_color mb-0"><Link to="/project/project-details">{item.title}</Link></h3>
                      <p className="cs_white_color mb-0">{item.desc}</p>
                    </div>
                    <Link to="/project/project-details" className="cs_text_btn cs_style_1 cs_bold cs_white_color cs_accent_bg">
                      <img src="/assets/img/icons/arrow_long.svg" alt="Arrow Icon" />
                    </Link>
                  </div>
                </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="cs_height_70 cs_height_lg_80"></div>
      </section>
    );
};

export default Project2;