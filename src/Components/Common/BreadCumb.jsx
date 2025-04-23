import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";

const BreadCumb = ({ bgImg, Title }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_page_heading cs_bg_filed cs_primary_bg"
      data-background={`${import.meta.env.BASE_URL}${bgImg}`}
    >
      <div className="container">
        <div className="row pt-4 align-items-center">

          <div className="col-md-6 mt-4 d-flex justify-content-center">
            <h1 className="cs_white_color text-center cs_fs_50">{Title}</h1>
          </div>


          <div className="col-md-6">
            <div className="mt-4 p-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
              <form>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="mb-3">

                      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">

                      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3">

                      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <textarea className="form-control h-100" id="message" rows="5" placeholder="Type your message here..."></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <button
                      className="cs_btn cs_style_1 rounded"
                      style={{ width: '150px', height: '40px' }}
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
    </section>
  );
};

export default BreadCumb;
