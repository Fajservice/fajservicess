import { memo } from "react";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const WhyChooseUS = () => (
  <section className="section cs_py_30">
    <div className="container container-md container-sm">
      <h2 className="my-3 why-choose-h2 text-center mb-3">
        CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!
      </h2>
      <div className="usps align-items-center">
        <div className="uspcol col-1">
          <div className="uspitem">
            <div className="uspicon">
              <img src={`${CDN}/icon/fast-reliable/public`} alt="Fast, Reliable Service" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>Reliable, Priority, and Quick</h3>
              <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly.</p>
            </div>
          </div>
          <div className="uspitem">
            <div className="uspicon">
              <img src={`${CDN}/icon/experts/public`} alt="We Are Experts" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>Feeling Of Calm</h3>
              <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/"><b>annual maintenance contract</b></a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.</p>
            </div>
          </div>
          <div className="uspitem mb-0">
            <div className="uspicon">
              <img src={`${CDN}/icon/full-control/public`} alt="FAJ icon service" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>You Are in Control</h3>
              <p>Choose a day and time for your AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
            </div>
          </div>
        </div>

        <div className="uspdelimit col-2">
          <img
            className="blue-border-2 w-100 why-choose-img"
            src={`${CDN}/ACServicescomponent-New/public`}
            alt="Ac Maintenance Services"
            loading="lazy"
            width="400"
            height="500"
          />
        </div>

        <div className="uspcol col-3">
          <div className="uspitem">
            <div className="uspicon">
              <img src={`${CDN}/icon/value/public`} alt="FAJ icon service" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>We Are Experts</h3>
              <p>We are experts in AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
            </div>
          </div>
          <div className="uspitem">
            <div className="uspicon">
              <img src={`${CDN}/icon/confidence-guarantee/public`} alt="FAJ icon service" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>Great Value</h3>
              <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>
            </div>
          </div>
          <div className="uspitem mb-0">
            <div className="uspicon">
              <img src={`${CDN}/icon/trustworthy/public`} alt="FAJ icon service" loading="lazy" width="48" height="48" />
            </div>
            <div className="usptext">
              <h3>Trustworthy</h3>
              <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(WhyChooseUS);
