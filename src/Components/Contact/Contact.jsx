import Form1 from "../Form/Form1";
import { IoMailOpenOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";


const Contact = ({Title,subTitle,address,email,emailLink,number,numberLink,number1,number1Link,clientNumber,img,client,title2,subtitle2 }) => {


    return (

        <section>
        <div className="cs_height_40 cs_height_lg_40"></div>
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_contact_info_wrapper position-relative">
                <div className="cs_contact_info cs_white_bg wow fadeInDown">
                  <div className="cs_accent_bg cs_line_shape cs_mb_32"></div>
                    <h2 className="cs_contact_info_title cs_fs_30 cs_mb_12">{Title}</h2>
                    <p className="cs_mb_25">{subTitle}</p>
                    <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                      <div className="cs_iconbox_icon cs_center">
                        {/* <img src={`${import.meta.env.BASE_URL}img/icons/location.svg`}  alt="Location Icon" /> */}
                        <MdOutlineLocationOn className="contact-icons"/>
                      </div>
                      <div className="cs_iconbox_info">
                        <p className="mb-0">{address}</p>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_1 cs_type_1 cs_mb_18">
                      <div className="cs_iconbox_icon cs_center">
                        {/* <img src={`${import.meta.env.BASE_URL}img/icons/mail_open.svg`}  alt="Mail Icon" /> */}
                        <IoMailOpenOutline className="contact-icons" />
                      </div>
                      <div className="cs_iconbox_info">
                        <a  href={emailLink}>{email}</a>
                      </div>
                    </div>
                    <div className="cs_iconbox cs_style_1 cs_type_1">
                      <div className="cs_iconbox_icon cs_center">
                        {/* <img src={`${import.meta.env.BASE_URL}img/icons/phone-call.svg`}  alt="Phone Icon" /> */}
                        <FiPhoneCall className="contact-icons" />
                      </div>
                      <div className="cs_iconbox_info">
                        <a className="cs_tab active" href={numberLink}>{number}</a><b/>
                        <a className="cs_tab active" href={number1Link}>{number1}</a>
                      </div>
                    </div>
                  </div>
                  <div className="cs_contact_thumbnail wow fadeInUp">
                    <img className="img-position" src={`${import.meta.env.BASE_URL}${img}`}  alt="Contact Image" />
                  </div>
                  <div className="cs_client_info_wapper cs_white_bg">
                    <h2 className="cs_fs_30 cs_accent_color">{clientNumber}</h2>
                    <p className="cs_fs_14 mb-0">{client}</p>
                  </div>
                </div>
              <div className="cs_height_44 cs_height_lg_30"></div>
            </div>
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1 cs_mb_45">
               
                <h2 className="cs_section_title cs_fs_50 mb-0 wow flipInX">{title2}</h2>
              </div>
              <Form1></Form1>
            </div>
          </div>
        </div>
        <div className="cs_height_80 cs_height_lg_80"></div>

        <div className="cs_navigation_map wow fadeInUp">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7412563066887!2d55.227661!3d25.110618600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699a600aceeb%3A0xa6121b25d557aa94!2sFAJ%20Technical%20Services%20L.L.C!5```e0!3m2!1sen!2sae!4v1743747276869!5m2!1sen!2sae" allowFullScreen="" ></iframe>
        </div>

      </section>
    );
};

export default Contact;