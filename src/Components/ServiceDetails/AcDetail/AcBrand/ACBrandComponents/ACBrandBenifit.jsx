import Airflow from "../../../../Svg/Airflow";
import Cooling from "../../../../Svg/Cooling";
import Customer from "../../../../Svg/Customer";
import Disinfect from "../../../../Svg/Disinfect";
import Fanassist from "../../../../Svg/Fanassist";
import Thermostat from "../../../../Svg/Thermostat";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const AcBrandBenifit = () => {
    return (
      
        <section className="section ac_benifit_blue">
            <div className="container">
                    <div className="text-center">
                        <h2 className="cs_fs_30 text-light my-5">Benefits of Regular AC Service and Maintenance in Dubai
                        </h2>
                        <div className="row mt-4 gx-4 gy-4">
                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Cooling />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">COOLING EFFICIENCY</h3>
                                    <p className="small">We conduct a thorough evaluation of cooling efficiency using a temperature gun.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Disinfect />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">DISINFECT COMPONENTS</h3>
                                    <p className="small">All hardware components have been tested and disinfected, including filters and vents.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Fanassist />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">FAN ASSESSMENT</h3>
                                    <p className="small">We make sure fan operates properly and there are no blockages in evaporator coil.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Thermostat />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">THERMOSTAT CHECK</h3>
                                    <p className="small">We use a laser temperature gauge to verify that the thermostats are operating correctly.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Airflow />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">AIRFLOW BALANCE</h3>
                                    <p className="small">We make sure that each room receives the optimal airflow it needs.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                                      <Customer />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6">CUSTOMER FEEDBACK</h3>
                                    <p className="small">Our team provides feedback on your AC&apos;s health and needed repairs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-4">
                        </div>
                    </div>
            </div>
        </section>
         );
};
        export default AcBrandBenifit