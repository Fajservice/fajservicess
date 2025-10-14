import '../css/coffeemachinelandingpage.css';
import { LuUserCog } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import { TbDropletDollar } from "react-icons/tb";
import { FaRecycle } from "react-icons/fa6";
import { GiHiveMind } from "react-icons/gi";
const CMBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <LuUserCog className='CM-Benfit-icon' />,
      title: 'Professional Repair & Maintenance',
      description: 'Expert technicians ensure your coffee machine runs smoothly and lasts longer.'
    },
    {
      id: 2,
      icon: <BsSpeedometer className='CM-Benefit-icon' />,
      title: 'Fast & Reliable Service',
      description: 'Quick turnaround time with on-site repair or pickup & delivery in Dubai.'
    },
    {
      id: 3,
      icon: <SlEnergy className='CM-Benefit-icon' />,
      title: 'Cost-Effective Solution',
      description: 'Regular servicing helps you avoid expensive breakdowns and replacements.'
    },
    {
      id: 4,
      icon: <TbDropletDollar className='CM-Benefit-icon' />,
      title: 'Better Taste & Performance',
      description: 'A well-maintained machine brews better coffee and improves daily operations.'
    },
    {
      id: 5,
      icon: <FaRecycle className='CM-Benefit-icon' />,
      title: 'Prevent Future Breakdowns',
      description: 'Keep your machine trouble-free and avoid unexpected expenses.'
    },
    {
      id: 6,
      icon: <GiHiveMind className='Benefit-icon' />,
      title: 'Spare Parts',
      description: 'We carefully choose quality parts that deliver strong and long-lasting results'
    }
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-title">THE BENEFITS OF COFFEE MACHINES SERVICE DUBAI</h2>
      
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="benefit-icon-wrapper">
              <span className="benefit-icon">{benefit.icon}</span>
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