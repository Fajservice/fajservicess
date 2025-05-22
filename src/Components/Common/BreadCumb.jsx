const BreadCumb = ({ bgImg, mobileBgImg, Title }) => {

  return (
    <section className="cs_page_heading cs_bg_filed cs_primary_bg">
      {/* Desktop Banner */}
      <div 
        className="desktop-banner d-none d-md-block"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '300px',
          position: 'relative'
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-6 mt-4 mb-4 d-flex justify-content-center">
              <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                {Title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div 
        className="mobile-banner d-block d-md-none"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}${mobileBgImg || bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100%',
          maxHeight: '100rem',
          position: 'relative'
        }}
      >
        {/* Mobile overlay for better text readability */}
        <div 
          className="mobile-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1
          }}
        ></div>

        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="mobile-banner-content text-center py-4" style={{ position: 'relative', zIndex: 2 }}>
                <h1 
                  className="cs_white_color mb-3" 
                  style={{ 
                    fontSize: "clamp(1.5rem, 6vw, 2rem)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                    fontWeight: "600"
                  }}
                >
                  {Title}
                </h1>
                
                {/* Mobile-specific decorative element */}
                <div className="mobile-decoration">
                  <div 
                    className="decoration-line mx-auto"
                    style={{
                      width: "60px",
                      height: "3px",
                      backgroundColor: "#fff",
                      borderRadius: "2px"
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .desktop-banner, .mobile-banner {
          display: flex;
          align-items: center;
        }
        
        @media (max-width: 767.98px) {
          .mobile-decoration {
            animation: fadeInUp 0.6s ease-out 0.3s both;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Extra padding div to ensure proper spacing after the section */}
      <div className="pb-3 d-md-none"></div>
    </section>
  );
};

export default BreadCumb;