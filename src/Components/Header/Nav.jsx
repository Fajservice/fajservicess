import { startTransition, useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';

// SVG components
const ChevronDown = ({ className = '', size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUp = ({ className = '', size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronForward = ({ className = '', size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  { path: '/', label: 'Home' },
  {
    path: '/services/',
    label: 'Services',
    children: [
      {
        path: '/services/air-conditioning-repair/',
        label: 'Air Conditioning',
        children: [
          { path: '/services/air-conditioning-repair/ac-service/', label: 'AC Service' },
          { path: '/services/air-conditioning-repair/ac-annual-maintenance-contract/', label: 'AMC (Maintenance Contract)' }
        ]
      },
      {
        path: '/services/coffee-machine/',
        label: 'Coffee Machine',
        children: [
          { path: '/services/coffee-machine/coffee-machine-service-center/', label: 'Coffee Machine Services' },
          { path: '/services/coffee-machine/coffee-machine-repairs/', label: 'Commercial Coffee Machine Repair' }
        ]
      },
      {
        path: '/services/home-appliances-repair/',
        label: 'Home Appliances',
        children: [
          { path: '/services/home-appliances-repair/hob-repair-service/', label: 'Hob Repair' },
          { path: '/services/home-appliances-repair/oven-repair-service/', label: 'Oven Repair' },
          { path: '/services/home-appliances-repair/gas-cooker-repair-service/', label: 'Gas Range Repair' },
          { path: '/services/home-appliances-repair/dishwasher-repair-service/', label: 'Dishwasher Repair' },
          { path: '/services/home-appliances-repair/refrigerator-repair-service/', label: 'Refrigerator Repair' },
          { path: '/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/', label: 'BBQ Repair Service' },
          { path: '/services/home-appliances-repair/cigar-humidor-repair/', label: 'Cigar Humidor Repair' },
          { path: '/services/home-appliances-repair/robot-vacuum-cleaner-repair/', label: 'Vacuum Cleaner Repair' },
          { path: '/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/', label: 'Small Appliances Repair' },
          { path: '/services/home-appliances-repair/washing-machine-repair-service-dubai/', label: 'Washing Machine Repair' },
          { path: '/services/home-appliances-repair/built-in-appliances-repair-service/', label: 'Integrated Appliance Repair' },
          { path: '/services/home-appliances-repair/appliances-repair-service/', label: 'Free Standing Appliance Repair' },
          { path: '/services/home-appliances-repair/appliances-amc-service/', label: 'Appliances Maintenance Contract' }
        ]
      },
      { path: '/services/pcb-repair-services/', label: 'PCB Repair Services' },
      {
        label: 'Refrigeration Equipment',
        children: [
          { path: '/services/refrigeration-equipment/ice-maker-repair/', label: 'Ice Maker Repair' },
          { path: '/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/', label: 'Refrigeration AMC Services' },
          { path: '/services/refrigeration-equipment/commercial-refrigeration-maintenance/', label: 'Commercial Refrigeration Maintenance' }
        ]
      },
      { path: '/services/commercial-dishwasher-repair/', label: 'Commercial Dishwasher' },
      {
        path: '/services/laundry-equipment-repair/',
        label: 'Laundry Equipment Repair',
      },
      
      

      {
        path: '/services/kitchen-equipment-maintenance/',
        label: 'Kitchen Equipment Maintenance',
        children: [
          { path: '/services/kitchen-equipment-maintenance/oven-repair/', label: 'Oven Repair' },
          { path: '/services/kitchen-equipment-maintenance/meat-grinder-repair/', label: 'Meat Grinder Repair' },
          { path: '/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/', label: 'Kitchen Equipment AMC' },
          { path: '/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/', label: 'Kitchen Equipment Repair' },
          { path: '/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/', label: 'Cooking Equipment Service' }
        ]
      }
       
    ]
  },
  {
    label: 'About Us',
    children: [
      { path: '/who-we-are/', label: 'Who We Are' },
      { path: '/our-vision-and-mission/', label: 'Our Vision And Mission' },
      { path: '/our-history/', label: 'Our History' },
      {
        path: '/career/',
        label: 'Careers',
        external: true
      },
      { path: '/our-portfolio/', label: 'Our Portfolio' },
      { path: '/blogs/', label: 'Blogs' }
    ]
  },
  { path: '/contact-us/', label: 'Contact Us' },
  // { path: 'https://www.fajtradingllc.com/', label: 'Shop', external: true }
];

export default function Nav({ setMobileToggle }) {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [hoveredItems, setHoveredItems] = useState(new Set());

  const handleNavigation = useCallback((path, isExternal = false) => {
    setMobileToggle(false);
    if (isExternal) {
      window.open(path, '_blank');
    } else {
      startTransition(() => {
        navigate(path);
      });
    }
  }, [navigate, setMobileToggle]);

  const handleMouseEnter = useCallback((itemKey) => {
    setHoveredItems(prev => new Set([...prev, itemKey]));
  }, []);

  const handleMouseLeave = useCallback((itemKey) => {
    setHoveredItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemKey);
      return newSet;
    });
  }, []);

  const adjustDropdownPositions = useCallback(() => {
    if (!navRef.current) return;

    const dropdowns = navRef.current.querySelectorAll('.menu-item-has-children');
    const viewportWidth = window.innerWidth;
    const padding = 20;
    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector('ul');
      if (!dropdownMenu) return;

      dropdownMenu.style.left = '';
      dropdownMenu.style.right = '';
      dropdownMenu.style.transform = '';

      setTimeout(() => {
        const rect = dropdownMenu.getBoundingClientRect();

        if (rect.right > (viewportWidth - padding)) {
          const overflow = rect.right - viewportWidth + padding;
          dropdownMenu.style.transform = `translateX(-${overflow}px)`;
        }

        const newRect = dropdownMenu.getBoundingClientRect();
        if (newRect.left < padding) {
          dropdownMenu.style.transform = `translateX(${padding - newRect.left}px)`;
        }

        const nestedDropdowns = dropdown.querySelectorAll('.menu-item-has-children .menu-item-has-children');
        nestedDropdowns.forEach((nestedDropdown) => {
          const nestedMenu = nestedDropdown.querySelector('ul');
          if (!nestedMenu) return;

          const nestedRect = nestedMenu.getBoundingClientRect();

          if (nestedRect.right > (viewportWidth - padding)) {
            nestedMenu.style.left = 'auto';
            nestedMenu.style.right = '100%';
            nestedMenu.style.marginRight = '5px';
          } else if (nestedRect.left < padding) {
            nestedMenu.style.left = '100%';
            nestedMenu.style.right = 'auto';
            nestedMenu.style.marginLeft = '5px';
          }
        });
      }, 10);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => adjustDropdownPositions();

    window.addEventListener('resize', handleResize);
    const observer = new ResizeObserver(() => {
      setTimeout(adjustDropdownPositions, 100);
    });

    if (navRef.current) {
      observer.observe(navRef.current);
      adjustDropdownPositions();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [adjustDropdownPositions]);

  const renderNavItems = (items, level = 0) => {
    return items.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExternal = item.external || item.path?.startsWith('http');
      const itemKey = `${level}-${index}`;
      const isHovered = hoveredItems.has(itemKey);

      return (
        <li
          key={itemKey}
          className={hasChildren ? 'menu-item-has-children' : ''}
          onMouseEnter={() => { if (hasChildren) { handleMouseEnter(itemKey); setTimeout(adjustDropdownPositions, 100); } }}
          onMouseLeave={() => { if (hasChildren) handleMouseLeave(itemKey); }}
        >
          {item.path ? (

            <a href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path, isExternal);
              }}
              className={level > 0 ? 'px-3 mb-0' : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: level > 0 && hasChildren ? 'space-between' : 'flex-start',
                gap: level === 0 && hasChildren ? '6px' : '0',
                width: '100%'
              }}
            >
              <span>{item.label}</span>
              {hasChildren && (
                level === 0 ? (
                  isHovered ? <ChevronUp className="nav-icon" size={14} /> : <ChevronDown className="nav-icon" size={14} />
                ) : (
                  <ChevronForward className="nav-icon" size={12} />
                )
              )}
            </a>
          ) : (
            <a
              className={level > 0 ? 'px-3 mb-0' : ''}
              onClick={() => setMobileToggle(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: level > 0 && hasChildren ? 'space-between' : 'flex-start',
                gap: level === 0 && hasChildren ? '6px' : '0',
                width: '100%'
              }}
            >
              <span>{item.label}</span>
              {hasChildren && (
                level === 0 ? (
                  isHovered ? <ChevronUp className="nav-icon" size={14} /> : <ChevronDown className="nav-icon" size={14} />
                ) : (
                  <ChevronForward className="nav-icon" size={12} />
                )
              )}
            </a>
          )}

          {hasChildren && (
            <DropDown>
              <ul className={level === 0 ? 'cs_fs_17 custom_border_drop' : 'cs_fs_16'}>
                {renderNavItems(item.children, level + 1)}
              </ul>
            </DropDown>
          )}
        </li>
      );
    });
  };

  return (
    <ul ref={navRef} className="cs_nav_list cs_medium">
      {renderNavItems(navItems)}
    </ul>
  );
}
