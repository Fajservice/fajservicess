import '../../../assets/main.css';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';

const categories = [
  { name: 'Carpet Shampoo and Floor Polishers Appliances', icon: 'carpet-shampoo' },
  { name: 'Dishwashers Appliances', icon: 'dishwasher' },
  { name: 'Freezers Appliances', icon: 'freezer' },
  { name: 'Fridge Freezers Appliances', icon: 'fridge-freezer' },
  { name: 'Fridges Appliances', icon: 'fridge' },
  { name: 'Hobs Appliances', icon: 'hob' },
  { name: 'Hoods Appliances', icon: 'hood' },
  { name: 'Larders Appliances', icon: 'larder' },
  { name: 'Ovens Appliances', icon: 'oven' },
  { name: 'Range Cookers Appliances', icon: 'range-cooker' },
  { name: 'Tumble Dryers Appliances', icon: 'tumble-dryer' },
  { name: 'Under Counter Appliances', icon: 'under-counter' },
  { name: 'Vacuum Cleaners Appliances', icon: 'vacuum' },
  { name: 'Warming Drawer Appliances', icon: 'warming-drawer' },
  { name: 'Washer Dryer Appliances', icon: 'washer-dryer' },
  { name: 'Washing Machine Appliances', icon: 'washing-machine' },
  { name: 'Wine Cooler Appliances', icon: 'wine-cooler' },
];

const icons = {
  'carpet-shampoo': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="20" y="8" width="24" height="40" rx="2" />
      <line x1="20" y1="20" x2="44" y2="20" />
      <circle cx="32" cy="14" r="2" />
      <rect x="24" y="48" width="4" height="8" />
      <rect x="36" y="48" width="4" height="8" />
    </svg>
  ),
  'dishwasher': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="2" />
      <line x1="12" y1="16" x2="52" y2="16" />
      <rect x="16" y="22" width="32" height="28" rx="1" />
      <circle cx="32" cy="12" r="2" />
      <line x1="20" y1="36" x2="44" y2="36" />
    </svg>
  ),
  'freezer': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <line x1="14" y1="20" x2="50" y2="20" />
      <line x1="14" y1="32" x2="50" y2="32" />
      <line x1="14" y1="44" x2="50" y2="44" />
      <rect x="42" y="24" width="4" height="6" rx="1" />
    </svg>
  ),
  'fridge-freezer': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <line x1="14" y1="28" x2="50" y2="28" />
      <rect x="42" y="12" width="4" height="6" rx="1" />
      <rect x="42" y="34" width="4" height="8" rx="1" />
    </svg>
  ),
  'fridge': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <line x1="14" y1="20" x2="50" y2="20" />
      <rect x="42" y="24" width="4" height="10" rx="1" />
      <line x1="20" y1="36" x2="44" y2="36" />
    </svg>
  ),
  'hob': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="20" width="48" height="32" rx="2" />
      <circle cx="22" cy="32" r="6" />
      <circle cx="42" cy="32" r="6" />
      <circle cx="22" cy="32" r="3" />
      <circle cx="42" cy="32" r="3" />
    </svg>
  ),
  'hood': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 40 L16 20 L48 20 L56 40 Z" />
      <rect x="24" y="8" width="16" height="12" />
      <line x1="20" y1="48" x2="20" y2="40" />
      <line x1="32" y1="48" x2="32" y2="40" />
      <line x1="44" y1="48" x2="44" y2="40" />
    </svg>
  ),
  'larder': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <line x1="18" y1="20" x2="46" y2="20" />
      <line x1="18" y1="32" x2="46" y2="32" />
      <line x1="18" y1="44" x2="46" y2="44" />
      <rect x="42" y="24" width="4" height="6" rx="1" />
    </svg>
  ),
  'oven': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="2" />
      <line x1="12" y1="18" x2="52" y2="18" />
      <rect x="18" y="24" width="28" height="26" rx="1" />
      <circle cx="20" cy="13" r="2" />
      <circle cx="32" cy="13" r="2" />
      <circle cx="44" cy="13" r="2" />
    </svg>
  ),
  'range-cooker': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="12" width="48" height="44" rx="2" />
      <line x1="8" y1="24" x2="56" y2="24" />
      <rect x="14" y="30" width="16" height="20" rx="1" />
      <rect x="34" y="30" width="16" height="20" rx="1" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="32" cy="18" r="2" />
      <circle cx="46" cy="18" r="2" />
    </svg>
  ),
  'tumble-dryer': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="2" />
      <circle cx="32" cy="36" r="14" />
      <circle cx="32" cy="36" r="8" />
      <circle cx="20" cy="14" r="2" />
      <circle cx="44" cy="14" r="2" />
    </svg>
  ),
  'under-counter': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="16" width="40" height="36" rx="2" />
      <line x1="12" y1="8" x2="52" y2="8" strokeWidth="3" />
      <line x1="12" y1="28" x2="52" y2="28" />
      <rect x="44" y="32" width="4" height="6" rx="1" />
    </svg>
  ),
  'vacuum': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="32" cy="48" rx="12" ry="6" />
      <path d="M26 48 L26 24 Q26 20 30 20 L40 20" />
      <circle cx="32" cy="48" r="3" />
      <rect x="38" y="12" width="12" height="16" rx="2" />
    </svg>
  ),
  'warming-drawer': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="24" width="44" height="20" rx="2" />
      <line x1="10" y1="34" x2="54" y2="34" />
      <rect x="24" y="28" width="16" height="3" rx="1" />
      <path d="M20 20 Q22 16 24 20" />
      <path d="M30 20 Q32 16 34 20" />
      <path d="M40 20 Q42 16 44 20" />
    </svg>
  ),
  'washer-dryer': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="2" />
      <line x1="12" y1="18" x2="52" y2="18" />
      <circle cx="32" cy="38" r="14" />
      <circle cx="32" cy="38" r="8" />
      <circle cx="18" cy="13" r="2" />
      <rect x="40" y="11" width="8" height="4" rx="1" />
    </svg>
  ),
  'washing-machine': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="40" height="48" rx="2" />
      <line x1="12" y1="18" x2="52" y2="18" />
      <circle cx="32" cy="38" r="14" />
      <circle cx="32" cy="38" r="8" />
      <circle cx="18" cy="13" r="2" />
      <circle cx="28" cy="13" r="2" />
    </svg>
  ),
  'wine-cooler': (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="16" y="8" width="32" height="48" rx="2" />
      <line x1="16" y1="20" x2="48" y2="20" />
      <line x1="16" y1="32" x2="48" y2="32" />
      <line x1="16" y1="44" x2="48" y2="44" />
      <ellipse cx="32" cy="14" rx="4" ry="2" />
      <rect x="40" y="24" width="4" height="6" rx="1" />
    </svg>
  ),
};

const ApplianceCategories = () => {
  return (
    <section className="section cs_py_30 bg-light-white">
      <div className="container">
        <div className="appliance-categories-grid">
          {categories.map((category, index) => (
            <a href="#" key={index} className="appliance-category-card">
              <div className="appliance-category-icon">
                {icons[category.icon]}
              </div>
              <span className="appliance-category-name">{category.name}</span>
            </a>
          ))}
        </div>
        <div id="get-quote" className="mb-0 mt-3">
                      <div className="container d-flex justify-content-center align-items-center gap-3">
                        <WhatsappIconButton />
                      </div>
                    </div>
      </div>
    </section>
  );
};

export default ApplianceCategories;
