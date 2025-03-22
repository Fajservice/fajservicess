import Form3 from "../Form/Form3";

const Contact = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_contact_desc">
                <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
                <div className="cs_contact_info_grid">
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                        <a href="tel:+111(564)56825">+111 (564) 568 25</a><br/>
                        <a href="tel:+111(564)56826">+111 (564) 568 26</a>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-envelope-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                        <a href="mailTo:needhelpcripar@gmail.com">needhelpcripar@gmail.com</a><br/>
                        <a href="mailTo:criparneedhelp@gmail.com">criparneedhelp@gmail.com</a>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                        <p className="mb-0">2118 Thorn ridge Cir. <br/> Syracuse Connecticut</p>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-clock-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                        <p className="mb-0">Sunday to Friday :</p>
                        <p className="mb-0">10 Am - 05PM</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_44 cs_height_lg_30"></div>
              <div className="cs_social_desc">
                <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                <p className="cs_mb_22">Algae can quickly take over a Car Repair if not addressed promptly. Learn effective.</p>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-youtube"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
                    <Form3></Form3>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <div className="cs_navigation_map wow fadeInUp">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001631!2d-74.14448723354508!3d40.69763123329699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1729318880502!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
    </div>

      </section>
    );
};

export default Contact;