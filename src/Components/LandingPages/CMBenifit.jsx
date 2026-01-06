import "../css/coffeemachinelandingpage.css";

/* ========= Inline SVG Icons ========= */

const UserCogIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm8 9a8 8 0 0 0-16 0z" />
  </svg>
);

const SpeedIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 9.5 4-4-1.5-1.5-4 4V16h1.5z" />
  </svg>
);

const EnergyIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
  </svg>
);

const DollarDropIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11zm1 15h-2v-1a3 3 0 0 1-2-2h2a1 1 0 0 0 2 0c0-.5-.5-.8-1.5-1.1C10 12.4 9 11.8 9 10a3 3 0 0 1 2-2V7h2v1a3 3 0 0 1 2 2h-2a1 1 0 0 0-2 0c0 .5.5.8 1.5 1.1C14 11.6 15 12.2 15 14a3 3 0 0 1-2 2z" />
  </svg>
);

const RecycleIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2 8 8h3v4l4-6h-3zM4 13l4 7 2-3h4l-6-4zM20 13l-6 4h4l2 3 4-7z" />
  </svg>
);

const SparePartsIcon = () => (
  <svg className="CM-Benefit-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm9 3h-2.1a6.9 6.9 0 0 0-.6-1.4l1.5-1.5-1.4-1.4-1.5 1.5a6.9 6.9 0 0 0-1.4-.6V3h-2v2.1a6.9 6.9 0 0 0-1.4.6L9.5 4.2 8.1 5.6l1.5 1.5a6.9 6.9 0 0 0-.6 1.4H6v2h2.1a6.9 6.9 0 0 0 .6 1.4l-1.5 1.5 1.4 1.4 1.5-1.5a6.9 6.9 0 0 0 1.4.6V21h2v-2.1a6.9 6.9 0 0 0 1.4-.6l1.5 1.5 1.4-1.4-1.5-1.5a6.9 6.9 0 0 0 .6-1.4H21z" />
  </svg>
);

/* ========= Component ========= */

const CMBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <UserCogIcon />,
      title: "Professional Repair & Maintenance",
      description:
        "Expert technicians ensure your coffee machine runs smoothly and lasts longer."
    },
    {
      id: 2,
      icon: <SpeedIcon />,
      title: "Fast & Reliable Service",
      description:
        "Quick turnaround time with on-site repair or pickup & delivery in Dubai."
    },
    {
      id: 3,
      icon: <EnergyIcon />,
      title: "Cost-Effective Solution",
      description:
        "Regular servicing helps you avoid expensive breakdowns and replacements."
    },
    {
      id: 4,
      icon: <DollarDropIcon />,
      title: "Better Taste & Performance",
      description:
        "A well-maintained machine brews better coffee and improves daily operations."
    },
    {
      id: 5,
      icon: <RecycleIcon />,
      title: "Prevent Future Breakdowns",
      description:
        "Keep your machine trouble-free and avoid unexpected expenses."
    },
    {
      id: 6,
      icon: <SparePartsIcon />,
      title: "Spare Parts",
      description:
        "We carefully choose quality parts that deliver strong and long-lasting results."
    }
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-title">
        THE BENEFITS OF COFFEE MACHINES SERVICE DUBAI
      </h2>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon-wrapper">
              {benefit.icon}
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMBenefits;
