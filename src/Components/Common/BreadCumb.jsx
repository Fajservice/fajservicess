import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";

const BreadCumb = ({ bgImg, Title }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  <script src="https://www.google.com/recaptcha/api.js"></script>

  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  return (
    <section
      className="cs_page_heading cs_bg_filed cs_primary_bg"
      data-background={`${import.meta.env.BASE_URL}${bgImg}`}
    >
      <div className="container">
        {/* Main row */}
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mt-4 mb-4 d-flex justify-content-center">
            <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 3.125rem)" }}>
              {Title}
            </h1>
          </div>

          {/* Form section */}
          <div className="col-12 col-md-6">
            <div className="mt-4 mb-5 p-3 p-md-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
              <form className="d-none d-sm-block">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <input type="text" className="form-control required" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                      <input type="tel" className="form-control required" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control required" id="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        style={{ height: "auto", minHeight: "100px" }}
                        placeholder="Type your message here..."
                      ></textarea>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <button
                      className="cs_btn cs_style_1 rounded g-recaptcha"
                      data-sitekey="reCAPTCHA_site_key"
                      data-callback='onSubmit'
                      data-action='submit'
                      style={{ width: '100%', maxWidth: '150px', height: '40px' }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Extra padding div to ensure proper spacing after the section */}
      <div className="pb-3 d-md-none"></div>
    </section>
  );
};

export default BreadCumb;