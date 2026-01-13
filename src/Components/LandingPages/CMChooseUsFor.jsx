
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const WhyChooseUS = () => {
  return (

    <section className="section cs_py_30">
      <div className="container container-md container-sm">
        <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>
        <div className="usps align-items-center	">
          {/* <!-- First Column --> */}
          <div className="uspcol col-1">
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/iconfast-reliable/public`} alt="Fast, Reliable Service" />
              </div>
              <div className="usptext">
                <h3 className="">Reliable, Priority, and Quick</h3>
                <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly. </p>
              </div>
            </div>

            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/iconexperts/public`} alt="We Are Experts" />
              </div>
              <div className="usptext">
                <h3 className="">Feeling Of Calm</h3>
                <p>With <a href="/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                </p>
              </div>
            </div>

            <div className="uspitem mb-0">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/iconfull-control/public`} alt="FAJ icon service" />
              </div>
              <div className="usptext">
                <h3 className="">You Are in Control</h3>
                <p>Choose a day and time for your AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                </p>
              </div>
            </div>

          </div>

          {/* <!-- Delimit Section --> */}
          <div className="uspdelimit col-2 d-none d-xl-block">

            <img className="blue-border-2 w-100 why-choose-img" src={`${CDN}/icon/ACServicescomponent/public`} alt="Ac Maintenance Services" />
          </div>

          {/* <!-- Second Column --> */}
          <div className="uspcol col-3">
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/iconvalue/public`} alt="FAJ icon service" />
              </div>
              <div className="usptext">
                <h3 className="">We Are Experts</h3>
                <p>We are experts in AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
              </div>
            </div>
            <div className="uspitem">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/iconconfidence-guarantee/public`} alt="FAJ icon service" />

              </div>
              <div className="usptext">
                <h3 className="">Great Value</h3>
                <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

              </div>
            </div>
            <div className="uspitem mb-0">
              <div className="uspicon">
                <img className="" src={`${CDN}/icon/icontrustworthy/public`} alt="FAJ icon service" />
              </div>
              <div className="usptext">
                <h3 className="">Trustworthy</h3>
                <p>Our <a href="https://www.facebook.com/ACRepairUAE"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                </p>
              </div>
            </div>
          </div>


        </div>
        {/* <!-- Delimit mobile --> */}
        <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
          <img className="blue-border-2 w-100" src={`${CDN}/icon/ACServicescomponent/public`} alt="Ac Maintenance Services" />
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUS
