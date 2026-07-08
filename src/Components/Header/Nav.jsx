import { Suspense, startTransition, useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DropDown from './DropDown';
import * as NavIcons from '../../icons/NavIcons';
import { preloadRoute } from '../../Routes/preloadRoutes';

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
// Custom hook for responsive breakpoint
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

// ====================== NAVIGATION ITEMS ======================
const navItems = [
  { path: '/', label: 'Home' },
  {
    path: '/services/',
    label: 'Services',
    children: [
      {
        path: '/services/air-conditioning-repair/',
        label: 'Air Conditioning',
        icon: <NavIcons.ACIcon />,
        children: [
          { path: '/services/air-conditioning-repair/ac-service/', label: 'AC Service', icon: <NavIcons.MACIcon /> },
          { path: '/services/air-conditioning-repair/ac-annual-maintenance-contract/', label: 'AMC (Maintenance Contract)', icon: <NavIcons.AmcAcIcon /> }
        ]
      },
      {
        path: '/services/coffee-machine/',
        label: 'Coffee Machine',
        icon: <NavIcons.CoffeeMachineIcon/>,
        children: [
          { path: '/services/coffee-machine/coffee-machine-service-center/', label: 'Coffee Machine Services', icon: <NavIcons.DCoffeeMachineIcon /> },
          { path: '/services/coffee-machine/coffee-machine-repairs/', label: 'Commercial Coffee Machine Repair', icon: <NavIcons.ComercialcoffeeIcon />   }
        ]
      },
      {
        path: '/services/home-appliances-repair/',
        label: 'Home Appliances',
        icon: <NavIcons.HomeApplianceIcon/>,
        children: [
          { path: '/services/home-appliances-repair/hob-repair-service/', label: 'Hob Repair', icon: <NavIcons.HobIcon/> },
          { path: '/services/home-appliances-repair/oven-repair-service/', label: 'Oven Repair', icon: <NavIcons.CommercialOvenIcon/> },
          { path: '/services/home-appliances-repair/gas-cooker-repair-service/', label: 'Gas Range Repair', icon: <NavIcons.GasRangeIcon/> },
          { path: '/services/home-appliances-repair/dishwasher-repair-service/', label: 'Dishwasher Repair', icon: <NavIcons.DishwasherIcon/> },
          { path: '/services/home-appliances-repair/refrigerator-repair-service/', label: 'Refrigerator Repair', icon: <NavIcons.RefrigerationIcon /> },
          { path: '/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/', label: 'BBQ Repair Service', icon: <NavIcons.Bbqcon /> },
          { path: '/services/home-appliances-repair/cigar-humidor-repair/', label: 'Cigar Humidor Repair', icon: <NavIcons.CigarIcon /> },
          { path: '/services/home-appliances-repair/robot-vacuum-cleaner-repair/', label: 'Vacuum Cleaner Repair', icon: <NavIcons.VacuumIcon /> },
          { path: '/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/', label: 'Small Appliances Repair', icon: <NavIcons.SmallApplianceIcon /> },
          { path: '/services/home-appliances-repair/washing-machine-repair-service-dubai/', label: 'Washing Machine Repair', icon: <NavIcons.WashingMachineIcon /> },
          { path: '/services/home-appliances-repair/built-in-appliances-repair-service/', label: 'Integrated Appliance Repair', icon: <NavIcons.IntegeratedApplianceIcon /> },
          { path: '/services/home-appliances-repair/appliances-repair-service/', label: 'Free Standing Appliance Repair', icon: <NavIcons.FreestandApplianceIcon /> },
          { path: '/services/home-appliances-repair/appliances-amc-service/', label: 'Appliances Maintenance Contract', icon: <NavIcons.ApplianceAmcIcon /> }
        ]
      },
      { path: '/services/pcb-repair-services/', label: 'PCB Repair Services', icon: <NavIcons.PcbBoardIcon/> },
      {
        label: 'Refrigeration Equipment', 
        icon: <NavIcons.CommercialRefrigerationIco/>,
        children: [
          { path: '/services/refrigeration-equipment/ice-maker-repair/', label: 'Ice Maker Repair', 
        icon: <NavIcons.IceMachineIcon /> },
          { path: '/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/', label: 'Refrigeration AMC Services', 
        icon: <NavIcons.CommercialRefrigerationIcon /> },
          { path: '/services/refrigeration-equipment/commercial-refrigeration-maintenance/', label: 'Commercial Refrigeration Maintenance', 
        icon: <NavIcons.CommercialRefrigerationIcon /> }
        ]
      },
      { path: '/services/commercial-dishwasher-repair/', label: 'Commercial Dishwasher', icon: <NavIcons.CdishwasherIcon /> },
      {
        path: '/services/laundry-equipment-repair/',
        label: 'Laundry Equipment',
        icon: <NavIcons.CLaundryIcon />
      },
      {
        path: '/services/kitchen-equipment-maintenance/',
        label: 'Kitchen Equipment', icon: <NavIcons.KitchenEqIcon />,
        children: [
          { path: '/services/kitchen-equipment-maintenance/oven-repair/', label: 'Oven Repair', 
        icon: <NavIcons.ovenIcon /> },
          { path: '/services/kitchen-equipment-maintenance/meat-grinder-repair/', label: 'Meat Grinder Repair', 
        icon: <NavIcons.MeatGrinderIcon /> },
          { path: '/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/', label: 'Kitchen Equipment AMC', 
        icon: <NavIcons.KitchenEquipmentAMCIcon /> },
          { path: '/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/', label: 'Kitchen Equipment Repair', 
        icon: <NavIcons.KitchenEqRepairIcon /> },
          { path: '/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/', label: 'Cooking Equipment Service', 
        icon: <NavIcons.CookingEquipmentServiceIcon /> }
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
      { path: '/career/', label: 'Careers'},
      { path: '/our-portfolio/', label: 'Our Portfolio' },
      { path: '/blogs/', label: 'Blogs' }
    ]
  },
  { path: '/contact-us/', label: 'Contact Us' },
];

const getItemKey = (item, parentKey, index) => item.path || `${parentKey}-${item.label}-${index}`;

const isExternalLink = (item) => item.external || item.path?.startsWith('http');

const preloadNavItem = (item) => {
  if (!item || isExternalLink(item)) return;
  preloadRoute(item.path);
};

const desktopLinkStyle = (level, hasChildren) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: level > 0 && hasChildren ? 'space-between' : 'flex-start',
  gap: level === 0 && hasChildren ? '6px' : '0',
  width: '100%',
});

const mobileLinkStyle = (level, hasChildren) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: level > 0 && hasChildren ? 'space-between' : 'flex-start',
  gap: '8px',
  width: '100%',
  padding: level > 0 ? '8px 8px 8px 16px' : '8px 8px',
});

const IconSlot = ({ icon }) => (
  <Suspense fallback={null}>
    {icon}
  </Suspense>
);

const MobileItemLabel = ({ icon, label }) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    {icon && <span><IconSlot icon={icon} /></span>}
    <span>{label}</span>
  </span>
);

const DesktopItemLabel = ({ item, hasChildren, isHovered, level }) => (
  <span className="text-center">
    {item.icon && <IconSlot icon={item.icon} />}
    <span className="d-flex align-items-center justify-content-center">
      {item.label}
      {hasChildren && (
        level === 0 ? (
          isHovered ? <ChevronUp className="nav-icon" size={14} /> : <ChevronDown className="nav-icon" size={14} />
        ) : (
          <ChevronForward className="nav-icon" size={12} />
        )
      )}
    </span>
  </span>
);

// ====================== MAIN NAV COMPONENT ======================
export default function Nav({ setMobileToggle }) {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [hoveredItems, setHoveredItems] = useState(new Set());
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState(new Set());
  const isMobile = useMediaQuery('(max-width: 1199px)');

  const closeMobileMenu = useCallback(() => {
    setMobileToggle(false);
  }, [setMobileToggle]);

  const handleNavigation = useCallback((path, isExternal = false) => {
    closeMobileMenu();

    if (isExternal) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    startTransition(() => {
      navigate(path);
    });
  }, [closeMobileMenu, navigate]);

  const handleMouseEnter = useCallback((itemKey) => {
    setHoveredItems(prev => new Set(prev).add(itemKey));
  }, []);

  const handleItemWarmup = useCallback((item) => {
    preloadNavItem(item);
  }, []);

  const handleMouseLeave = useCallback((itemKey) => {
    setHoveredItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(itemKey);
      return newSet;
    });
  }, []);

  const toggleMobileSubmenu = useCallback((itemKey) => {
    setOpenMobileSubmenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
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
    const observer = new ResizeObserver(() => {
      setTimeout(adjustDropdownPositions, 100);
    });

    window.addEventListener('resize', handleResize);

    if (navRef.current) {
      observer.observe(navRef.current);
      adjustDropdownPositions();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [adjustDropdownPositions]);

  const renderDesktopLink = useCallback((item, level, hasChildren, isHovered, isExternal) => {
    const content = (
      <DesktopItemLabel
        item={item}
        hasChildren={hasChildren}
        isHovered={isHovered}
        level={level}
      />
    );
    const commonProps = {
      className: level > 0 ? 'px-3 mb-0' : '',
      onFocus: () => handleItemWarmup(item),
      onMouseEnter: () => handleItemWarmup(item),
      style: desktopLinkStyle(level, hasChildren),
    };

    if (!item.path) {
      return (
        <a {...commonProps} onClick={closeMobileMenu}>
          {content}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          {...commonProps}
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.path, true);
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...commonProps} to={item.path} onClick={closeMobileMenu}>
        {content}
      </Link>
    );
  }, [closeMobileMenu, handleItemWarmup, handleNavigation]);

  const renderDesktopNavItems = useCallback((items, level = 0, parentKey = 'desktop') => {
    return items.map((item, index) => {
      const hasChildren = item.children?.length > 0;
      const itemKey = getItemKey(item, parentKey, index);
      const isHovered = hoveredItems.has(itemKey);
      const isExternal = isExternalLink(item);

      return (
        <li
          key={itemKey}
          className={`${hasChildren ? 'menu-item-has-children' : ''}${level === 0 ? ' top-level-item' : ''}`}
          onMouseEnter={() => {
            if (hasChildren) {
              handleMouseEnter(itemKey);
              setTimeout(adjustDropdownPositions, 100);
            }
          }}
          onMouseLeave={() => {
            if (hasChildren) handleMouseLeave(itemKey);
          }}
        >
          {renderDesktopLink(item, level, hasChildren, isHovered, isExternal)}

          {hasChildren && (
            <DropDown>
              <div className={`megamenu-wrapper-menu-level-${level + 1}`}>
                <ul className={`${level === 0 ? 'cs_fs_17 custom_border_drop px-3' : 'cs_fs_16 px-3'} menu-level-${level + 1}`}>
                  {renderDesktopNavItems(item.children, level + 1, itemKey)}
                </ul>
              </div>
            </DropDown>
          )}
        </li>
      );
    });
  }, [
    adjustDropdownPositions,
    handleMouseEnter,
    handleMouseLeave,
    hoveredItems,
    renderDesktopLink,
  ]);

  const renderMobileLink = useCallback((item, level, hasChildren, isOpen, isExternal, itemKey) => {
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (hasChildren) {
        toggleMobileSubmenu(itemKey);
      } else if (item.path) {
        handleNavigation(item.path, isExternal);
      } else {
        closeMobileMenu();
      }
    };

    const commonProps = {
      onClick: handleClick,
      onFocus: () => handleItemWarmup(item),
      onMouseEnter: () => handleItemWarmup(item),
      onMouseDown: (e) => e.stopPropagation(),
      style: mobileLinkStyle(level, hasChildren),
    };
    const content = (
      <>
        <MobileItemLabel icon={item.icon} label={item.label} />
        {hasChildren && (isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
      </>
    );

    if (!item.path) {
      return <div {...commonProps}>{content}</div>;
    }

    if (isExternal) {
      return <a href={item.path} {...commonProps}>{content}</a>;
    }

    return <Link to={item.path} {...commonProps}>{content}</Link>;
  }, [closeMobileMenu, handleItemWarmup, handleNavigation, toggleMobileSubmenu]);

  const renderMobileNavItems = useCallback((items, level = 0, parentKey = 'mobile') => {
    return items.map((item, index) => {
      const hasChildren = item.children?.length > 0;
      const isExternal = isExternalLink(item);
      const itemKey = getItemKey(item, parentKey, index);
      const isOpen = openMobileSubmenus.has(itemKey);

      return (
        <li key={itemKey}>
          {renderMobileLink(item, level, hasChildren, isOpen, isExternal, itemKey)}

          {hasChildren && isOpen && (
            <ul style={{ listStyle: 'none', paddingLeft: level === 0 ? '0px' : '24px', marginTop: '4px', display: 'block' }}>
              {renderMobileNavItems(item.children, level + 1, itemKey)}
            </ul>
          )}
        </li>
      );
    });
  }, [openMobileSubmenus, renderMobileLink]);

  return (
    <ul ref={navRef} className="cs_nav_list cs_medium">
      {isMobile ? renderMobileNavItems(navItems) : renderDesktopNavItems(navItems)}
    </ul>
  );
}
