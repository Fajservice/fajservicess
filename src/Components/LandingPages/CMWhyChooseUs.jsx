import "../css/coffeemachinelandingpage.css";

/* Inline SVG icons (NO react-icons, NO build errors) */

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 2l3 4 5 .7-3.6 3.5.9 5L12 13.8 6.7 15.2l.9-5L4 6.7 9 6z" />
  </svg>
);

const TeamIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v2h10v-2c0-1.3.5-2.5 1.3-3.4-1-.4-2.2-.6-3.3-.6zm8 0c-.3 0-.6 0-.9.1 1.2.9 1.9 2.1 1.9 3.3v2h7v-2c0-2.7-5.3-4-8-4z"/>
  </svg>
);

const MaintenanceIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M22.7 19.3l-6.1-6.1c.3-.8.4-1.6.4-2.5C17 7.1 13.9 4 10 4S3 7.1 3 10s3.1 6 7 6c.9 0 1.7-.2 2.5-.4l6.1 6.1 4.1-2.4zM10 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
  </svg>
);

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
);

const CMWhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <VerifiedIcon />,
      title: "Expert Technicians",
      description: "Skilled professionals who know every detail of coffee machines."
    },
    {
      id: 2,
      icon: <TeamIcon />,
      title: "Quick Service",
      description: "Fast turnaround with on-site or same-day repair options."
    },
    {
      id: 3,
      icon: <MaintenanceIcon />,
      title: "Affordable Pricing",
      description: "Quality service without breaking the bank."
    },
    {
      id: 4,
      icon: <PeopleIcon />,
      title: "Customer Satisfaction",
      description: "Friendly support and trusted service every time."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <h2 className="why-choose-title">Why Choose Us</h2>

      <p className="why-choose-description">
        FAJ team of experts in coffee machine maintenance and repair in Dubai
        provides reliable solutions to keep your equipment running flawlessly.
      </p>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-circle">
              {feature.icon}
            </div>

            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <button className="get-quote-button">
        GET A QUOTE
      </button>
    </section>
  );
};

export default CMWhyChooseUs;
