
const BreadCumb = ({ bgImg, Title }) => {

  return (
    <section
      className="cs_page_heading cs_bg_filed cs_primary_bg"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})` }}
    >
      {/* <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mt-4 mb-4 d-flex justify-content-center">
            <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
              {Title}
            </h1>
          </div>
        </div>
      </div> */}

      {/* Extra padding div to ensure proper spacing after the section */}
      <div className="pb-3 d-md-none"></div>
    </section>
  );
};

export default BreadCumb;