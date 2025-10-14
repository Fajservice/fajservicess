import '../css/coffeemachinelandingpage.css';
import { MdVerifiedUser } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { GrHostMaintenance } from "react-icons/gr";
import { RiUserCommunityFill } from "react-icons/ri";
const CMWhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <MdVerifiedUser className='verify-icon' />,
      title: 'Expert Technicians',
      description: 'Skilled professionals who know every detail of coffee machines.'
    },
    {
      id: 2,
      icon: <RiTeamFill className='verify-icon' />,
      title: 'Quick Service',
      description: 'Fast turnaround with on-site or same-day repair options.'
    },
    {
      id: 3,
      icon: <GrHostMaintenance className='verify-icon' />,
      title: 'Affordable Pricing',
      description: 'Quality service without breaking the bank'
    },
    {
      id: 4,
      icon: <RiUserCommunityFill className='verify-icon' />,
      title: 'Customer Satisfaction',
      description: 'Friendly support and trusted service every time.'
    }
  ];

  const handleGetQuote = () => {
    console.log('Get a quote clicked');
  };

  return (
    <div className="why-choose-us-section">
      <h2 className="why-choose-title">Why Choose US</h2>
      <p className="why-choose-description">
        FAJ team of experts at coffee machine maintenance and repair in Dubai offers everything needed to keep your coffee maker, espresso machine, 
        grinder, and commercial coffee equipment running smoothly.
      </p>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-circle">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <button className="get-quote-button" onClick={handleGetQuote}>
        GET A QUOTE
      </button>
    </div>
  );
};

export default CMWhyChooseUs;