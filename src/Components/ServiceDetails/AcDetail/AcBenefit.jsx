import Cooling from '../../Svg/Cooling';
import Improve from '../../Svg/Improve';
import Airflow from '../../Svg/Airflow';
import Customer from '../../Svg/Customer';
import Inspection from '../../Svg/Inspection';
import Thermostat from '../../Svg/Thermostat';

const benefitsData = [
  {
    id: 1,
    Icon: Cooling,
    title: 'COOLING EFFICIENCY',
    description: 'We carry out a complete assessment of the cooling efficiency using a temperature gun.'
  },
  {
    id: 2,
    Icon: Improve,
    title: 'DISINFECT COMPONENTS',
    description: 'All hardware components are tested and disinfected, including filters and vents.'
  },
  {
    id: 3,
    Icon: Inspection,
    title: 'FAN ASSESSMENT',
    description: 'We ensure the fan works correctly with no blockages in the evaporator coil.'
  },
  {
    id: 4,
    Icon: Thermostat,
    title: 'THERMOSTAT CHECK',
    description: 'We use a laser temperature gauge to ensure thermostats operate correctly.'
  },
  {
    id: 5,
    Icon: Airflow,
    title: 'AIRFLOW BALANCE',
    description: 'We ensure you get optimal air flow around each room as needed.'
  },
  {
    id: 6,
    Icon: Customer,
    title: 'CUSTOMER FEEDBACK',
    description: 'Our team provides vital feedback on your ACs health and any needed air con repair.'
  }
];

const BenefitCard = ({ Icon, title, description }) => (
  <div className="col-md-4 mb-5">
    <div className="benefit_wrapper_box d-flex flex-column align-items-center px-5">
      <div className="mb-2 benefit_wrapper_box_icon" style={{ width: '80px', height: '80px' }}>
        <Icon />
      </div>
      <h3 className="text-uppercase my-2 fs-10">{title}</h3>
      <p className="small">{description}</p>
    </div>
  </div>
);

const AcBenefits = ({ city = 'Dubai' }) => {
  return (
    <>
      <style>{`
        .benefit_wrapper_box {
          background-color: #fff;
          border-radius: 25px;
          padding: 4em 5px 3em;
          position: relative;
          height: -webkit-fill-available;
        }
        .benefit_wrapper_box .benefit_wrapper_box_icon {
          background-color: #00334E;
          border: 1px solid #fff;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -42px;
        }
        .benefit_wrapper_box h3 {
          font-size: 18px;
          color: #0A0A0A;
        }
        .benefit_wrapper_box p {
          font-size: 16px;
          color: #0A0A0A;
        }
      `}</style>

      <section className="section ac_benifit_blue">
        <div className="container">
          <div className="text-center">
            <h2 className="cs_fs_30 text-light my-5">
              Benefits Of Regular AC Service and Maintenance in {city}
            </h2>
            <div className="row mt-4 gx-4 gy-4">
              {benefitsData.map((benefit) => (
                <BenefitCard
                  key={benefit.id}
                  Icon={benefit.Icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            <div className="text-center mb-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcBenefits;
