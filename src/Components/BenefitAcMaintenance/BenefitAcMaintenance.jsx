import React from 'react'
import GetQuoteButton from '../Buttons/GetQuoteButton'

const BenefitAcMaintenance = () => {
  return (
    <>
    {/* The Benefits Of Regular AC Maintenance Dubai Service */}
    <section className="section cs_py_40" style={{ backgroundColor: "#00334E", color: "white" }}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
                <h3 className="cs_fs_30 text-light mb-3 mt-4">The Benefits Of Regular AC Maintenance Dubai Service</h3>

                <div className="row mt-4 gx-4 gy-4">
                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/Improved AC Cooling.svg`} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h5>
                            <p className="small">We carry out a complete assessment of the cooling efficiency using a temperature gun.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/Energy Efficient.svg`} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h5>
                            <p className="small">All hardware components are tested and disinfected, including filters and vents.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/Extended Lifespan.svg`} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h5>
                            <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/No Costly Repairs.svg`} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h5>
                            <p className="small">We use a laser temperature gauge to ensure thermostats operate correctly.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h5>
                            <p className="small">We ensure you get optimal air flow around each room as needed.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="d-flex flex-column align-items-center px-2">
                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                <img src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                            </div>
                            <h5 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h5>
                            <p className="small">Our team provides vital feedback on your AC's health and any needed repairs.</p>
                        </div>
                    </div>
                </div>

                <p className="mt-4 mb-4">Contact us now to get a free AC service quote.</p>

                <div className="text-center mb-4">
                   <GetQuoteButton />
                </div>
            </div>
        </div>
    </div>
</section>
    </>
    
  )
}

export default BenefitAcMaintenance
