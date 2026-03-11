import '../../../assets/main.css';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const categories = [
  { name: 'Hob Repair', icon: getImageSrc('hobrepaircat'), link: '/services/home-appliances-repair/hob-repair-service/' },
  { name: 'Oven Repair', icon: getImageSrc('ovenrepaircat'), link: '/services/home-appliances-repair/oven-repair-service/' },
  { name: 'Gas Range Repair', icon: getImageSrc('gasrangerepaircat'), link: '/services/home-appliances-repair/gas-cooker-repair-service/' },
  { name: 'Refrigerator Repair', icon: getImageSrc('fridgecat'), link: '/services/home-appliances-repair/refrigerator-repair-service/' },
  { name: 'Dishwasher Repair', icon: getImageSrc('dishwasherrepaircat'), link: '/services/home-appliances-repair/dishwasher-repair-service/' },
  { name: 'BBQ Repair Service', icon: getImageSrc('bbqrepairrcat'), link: '/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/' },
  { name: 'Cigar Humidor Repair', icon: getImageSrc('cigarhumidorcat'), link: '/services/home-appliances-repair/cigar-humidor-repair/' },
  { name: 'Vacuum Repair', icon: getImageSrc('vacuumcleanercat'), link: '/services/home-appliances-repair/robot-vacuum-cleaner-repair/' },
  { name: 'Small Appliances Repair', icon: getImageSrc('smallappliancesrepair'), link: '/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/' },
  { name: 'Washing Machine Repair', icon: getImageSrc('washingmachinerepair'), link: '/services/home-appliances-repair/washing-machine-repair-service-dubai/' },
  { name: 'Integrated Appliances Repair', icon: getImageSrc('integratedappliancesrepair'), link: '/services/home-appliances-repair/built-in-appliances-repair-service/' },
  { name: 'Free Standing Appliances Repair', icon: getImageSrc('freestandingappliancesrepair'), link: '/services/home-appliances-repair/appliances-repair-service/' },
  { name: 'AMC Contract', icon: getImageSrc('amccontractcat'), link: '/services/home-appliances-repair/appliances-amc-service/' },
];

const ApplianceCategories = () => {
  return (
    <section className="section cs_py_30">
      <div className="container">
        <div className="appliance-categories-grid">
          {categories.map((category, index) => (
            <a href={category.link} key={index} className="appliance-category-card">
              <div className="appliance-category-icon">
                <img 
                  src={category.icon} 
                  alt={category.name}
                  className="appliance-category-icon-img"
                />
              </div>
              <span className="appliance-category-name">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplianceCategories;