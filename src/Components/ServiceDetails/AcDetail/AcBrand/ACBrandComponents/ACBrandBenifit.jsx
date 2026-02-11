const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const AcBrandBenifit = () => {
    return (
<section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits of Regular AC Service and Maintenance in Dubai </h2>

                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/cooling1')} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h3>
                      <p className="small">
                        We conduct a thorough evaluation of cooling efficiency using a temperature gun.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/disinfection')} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h3>
                      <p className="small">
                        All hardware components have been tested and disinfected, including filters and vents.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/fan')} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h3>
                      <p className="small">
                        We make sure fan operates properly and there are no blockages in evaporator coil.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/thermo')} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h3>
                      <p className="small">
                        We use a laser temperature gauge to verify that the thermostats are operating correctly.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/airflow')} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h3>
                      <p className="small">
                        We make sure that each room receives the optimal airflow it needs.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/customer')} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" loading="lazy" decoding="async" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h3>
                      <p className="small">
                        Our team provides feedback on your AC&apos;s health and needed repairs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                </div>
              </div>
            </div>
          </div>
        </section>
         );
};
        export default AcBrandBenifit