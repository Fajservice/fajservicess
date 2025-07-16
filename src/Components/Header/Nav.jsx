import { startTransition, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';

// Navigation data structure for better maintainability
const navItems = [
  { path: '/', label: 'Home' },
  {
    path: '/services/',
    label: 'Services',
    children: [
      {
        label: 'Air Conditioning Services',
        children: [
          { path: '/ac-repair-dubai/', label: 'AC Repair' },
          { path: '/ac-maintenance-dubai/', label: 'AC Maintenance' },
          { path: '/ac-service-in-dubai/', label: 'AC Cleaning Services' },
          { path: '/ac-annual-maintenance-contract/', label: 'AC Maintenance Contract' }
        ]
      },
      {
        label: 'Coffee Machine Services',
        children: [
          { path: '/coffee-machine-service-center-in-dubai/', label: 'Coffee Machine Services' },
          { path: '/coffee-machine-repairs/', label: 'Commercial Coffee Machine Repair' }
        ]
      },
      {
        label: 'Home Appliances Services',
        children: [
          { path: '/hob-repair-service/', label: 'Hob Repair' },
          { path: '/oven-repair-service/', label: 'Oven Repair' },
          { path: '/gas-cooker-repair-service/', label: 'Gas Range Repair' },
          { path: '/dishwasher-repair-service/', label: 'Dishwasher Repair' },
          { path: '/refrigerator-repair-service/', label: 'Refrigerator Repair' },
          { path: '/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/', label: 'BBQ Repair Service' },
          { path: '/cigar-humidor-repair/', label: 'Cigar Humidor Repair' },
          { path: '/robot-vacuum-cleaner-repair/', label: 'Vacuum Cleaner Repair' },
          { path: '/small-home-appliances-service-center-in-dubai/', label: 'Small Appliances Repair' },
          { path: '/washing-machine-repair-service-dubai/', label: 'Washing Machine Repair' },
          { path: '/built-in-appliances-repair-service/', label: 'Integrated Appliance Repair' },
          { path: '/appliances-repair-service/', label: 'Free Standing Appliance Repair' },
          { path: '/appliances-amc-service/', label: 'Appliances Maintenance Contract' }
        ]
      },
      {
        label: 'Kitchen Equipment Services',
        children: [
          { path: '/oven-repair/', label: 'Oven Repair' },
          { path: '/meat-grinder-repair/', label: 'Meat Grinder Repair' },
          { path: '/commercial-kitchen-equipment-amc/', label: 'Kitchen Equipment AMC' },
          { path: '/commercial-kitchen-equipment-maintenance-services/', label: 'Kitchen Equipment Repair' },
          { path: '/commercial-cooking-appliances-repair-service/', label: 'Cooking Equipment Service' }
        ]
      },
      {
        label: 'Refrigeration Equipment Services',
        children: [
          { path: '/ice-maker-repair/', label: 'Ice Maker Repair' },
          { path: '/commercial-refrigeration-maintenance-contact-services/', label: 'Refrigeration AMC Services' },
          { path: '/commercial-refrigeration-maintenance/', label: 'Commercial Refrigeration Maintenance' }
        ]
      },
      { path: '/commercial-dishwasher-repair/', label: 'Commercial Dishwasher Services' },
      {
        label: 'Commercial Laundry Equipment Services',
        children: [
          { path: '/commercial-washing-machine-repair/', label: 'Washing Machine Repair' },
          { path: '/commercial-laundry-equipment-service/', label: 'Laundry Equipment Service' }
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
      { path: '/our-team/', label: 'Our Team' },
      { 
        path: 'https://careers.fajservices.ae/', 
        label: 'Careers',
        external: true 
      },
      { path: '/our-portfolio/', label: 'Our Portfolio' },
      { path: '/blogs/', label: 'Blogs' }
    ]
  },
  { path: '/contact-us/', label: 'Contact Us' }
];

export default function Nav({ setMobileToggle }) {
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Memoized navigation handler
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

  // Memoized dropdown position adjustment
  const adjustDropdownPositions = useCallback(() => {
    if (!navRef.current) return;

    const dropdowns = navRef.current.querySelectorAll('.menu-item-has-children');
    const viewportWidth = window.innerWidth;
    const padding = 20; // Safety padding from screen edge
    
    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector('ul');
      if (!dropdownMenu) return;

      // Reset any previous adjustments
      dropdownMenu.style.left = '';
      dropdownMenu.style.right = '';
      dropdownMenu.style.transform = '';

      // Calculate position after a brief timeout
      setTimeout(() => {
        const rect = dropdownMenu.getBoundingClientRect();
        
        // Check right overflow
        if (rect.right > (viewportWidth - padding)) {
          const overflow = rect.right - viewportWidth + padding;
          dropdownMenu.style.transform = `translateX(-${overflow}px)`;
        }
        
        // Check left overflow after adjustment
        const newRect = dropdownMenu.getBoundingClientRect();
        if (newRect.left < padding) {
          dropdownMenu.style.transform = `translateX(${padding - newRect.left}px)`;
        }

        // Handle nested dropdowns
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

  // Event handlers setup
  useEffect(() => {
    const handleResize = () => adjustDropdownPositions();
    
    window.addEventListener('resize', handleResize);
    const observer = new ResizeObserver(() => {
      setTimeout(adjustDropdownPositions, 100);
    });

    if (navRef.current) {
      observer.observe(navRef.current);
      // Initial adjustment
      adjustDropdownPositions();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [adjustDropdownPositions]);

  // Recursive function to render navigation items
  const renderNavItems = (items, level = 0) => {
    return items.map((item, index) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExternal = item.external || item.path?.startsWith('http');
      
      return (
        <li 
          key={`${level}-${index}`}
          className={hasChildren ? 'menu-item-has-children' : ''}
          onMouseEnter={hasChildren ? () => setTimeout(adjustDropdownPositions, 100) : undefined}
        >
          {item.path ? (
            <a
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path, isExternal);
              }}
              className={level > 0 ? 'px-3 mb-0' : ''}
            >
              {item.label}
            </a>
          ) : (
            <a className={level > 0 ? 'px-3 mb-0' : ''} onClick={() => setMobileToggle(false)}>
              {item.label}
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