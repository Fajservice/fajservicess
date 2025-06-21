import { startTransition, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Handle navigation with startTransition
  const handleNavigation = (path) => {
    setMobileToggle(false);
    startTransition(() => {
      navigate(path);
    });
  };

  // Function to adjust dropdown positions
  const adjustDropdownPositions = () => {
    if (!navRef.current) return;

    const dropdowns = navRef.current.querySelectorAll('.menu-item-has-children');
    
    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector('ul');
      if (!dropdownMenu) return;

      // Reset any previous adjustments
      dropdownMenu.style.left = '';
      dropdownMenu.style.right = '';
      dropdownMenu.style.transform = '';

      // Wait for dropdown to be visible before calculating
      setTimeout(() => {
        const rect = dropdownMenu.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const padding = 20; // Safety padding from screen edge
        
        // Check if dropdown overflows on the right
        if (rect.right > (viewportWidth - padding)) {
          const overflow = rect.right - viewportWidth + padding;
          dropdownMenu.style.transform = `translateX(-${overflow}px)`;
        }
        
        // Check if dropdown overflows on the left after adjustment
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
          
          // For nested dropdowns, check both sides
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
  };

  useEffect(() => {
    // Adjust positions on mount and resize
    const handleResize = () => {
      adjustDropdownPositions();
    };

    window.addEventListener('resize', handleResize);
    
    // Also adjust on zoom (detected through resize)
    const observer = new ResizeObserver(() => {
      setTimeout(adjustDropdownPositions, 100);
    });

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Adjust positions when dropdowns are hovered
  const handleDropdownHover = () => {
    setTimeout(adjustDropdownPositions, 100); // Increased timeout for better detection
  };

  return (
    <ul ref={navRef} className="cs_nav_list cs_medium">
      <li>
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
          Home
        </a>
      </li>
      <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
        <a href="/services/" onClick={(e) => { e.preventDefault(); handleNavigation('/services/'); }}>
          Services
        </a>
        <DropDown>
          <ul className='cs_fs_17 custom_border_drop'>
            <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Air Conditioning Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/ac-repair-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/ac-repair-dubai/'); }}>
                      AC Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/ac-maintenance-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/ac-maintenance-dubai/'); }}>
                      AC Maintenance
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/ac-service-in-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/ac-service-in-dubai/'); }}>
                      AC Cleaning Services
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/ac-annual-maintenance-contract/" onClick={(e) => { e.preventDefault(); handleNavigation('/ac-annual-maintenance-contract/'); }}>
                      AC Maintenance Contract
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Coffee Machine Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/coffee-machine-service-center-in-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/coffee-machine-service-center-in-dubai/'); }}>
                      Coffee Machine Services
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/coffee-machine-repairs/" onClick={(e) => { e.preventDefault(); handleNavigation('/coffee-machine-repairs/'); }}>
                      Commercial Coffee Machine Repair
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Home Appliances Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/hob-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/hob-repair-service/'); }}>
                      Hob Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/oven-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/oven-repair-service/'); }}>
                      Oven Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/gas-cooker-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/gas-cooker-repair-service/'); }}>
                      Gas Range Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/dishwasher-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/dishwasher-repair-service/'); }}>
                      Dishwasher Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/refrigerator-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/refrigerator-repair-service/'); }}>
                      Refrigerator Repair 
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/'); }}>
                      BBQ Repair Service
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/cigar-humidor-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/cigar-humidor-repair/'); }}>
                      Cigar Humidor Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/robot-vacuum-cleaner-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/robot-vacuum-cleaner-repair/'); }}>
                      Vacuum Cleaner Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/small-home-appliances-service-center-in-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/small-home-appliances-service-center-in-dubai/'); }}>
                      Small Appliances Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/washing-machine-repair-service-dubai/" onClick={(e) => { e.preventDefault(); handleNavigation('/washing-machine-repair-service-dubai/'); }}>
                      Washing Machine Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/built-in-appliances-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/built-in-appliances-repair-service/'); }}>
                      Integrated Appliance Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/appliances-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/appliances-repair-service/'); }}>
                      Free Standing Appliance Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/appliances-amc-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/appliances-amc-service/'); }}>
                      Appliances Maintenance Contract
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Kitchen Equipment Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/oven-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/oven-repair/'); }}>
                      Oven Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/meat-grinder-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/meat-grinder-repair/'); }}>
                      Meat Grinder Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-kitchen-equipment-amc/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-kitchen-equipment-amc/'); }}>
                      Kitchen Equipment AMC
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-kitchen-equipment-maintenance-services/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-kitchen-equipment-maintenance-services/'); }}>
                      Kitchen Equipment Repair 
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-cooking-appliances-repair-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-cooking-appliances-repair-service/'); }}>
                      Cooking Equipment Service
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className='menu-item-has-children' onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Refrigeration Equipment Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/ice-maker-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/ice-maker-repair/'); }}>
                      Ice Maker Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-refrigeration-maintenance-contact-services/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-refrigeration-maintenance-contact-services/'); }}>
                      Refrigeration AMC Services
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-refrigeration-maintenance/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-refrigeration-maintenance/'); }}>
                      Commercial Refrigeration Maintenance
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li>
              <a href="/commercial-dishwasher-repair/" className='px-3' onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-dishwasher-repair/'); }}>
                Commercial Dishwasher Services
              </a>
            </li>
            <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Commercial Laundry Equipment Services
              </a>
              <DropDown>
                <ul className='cs_fs_16'>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-washing-machine-repair/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-washing-machine-repair/'); }}>
                      Washing Machine Repair
                    </a>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <a href="/commercial-laundry-equipment-service/" onClick={(e) => { e.preventDefault(); handleNavigation('/commercial-laundry-equipment-service/'); }}>
                      Laundry Equipment Service
                    </a>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </DropDown>
      </li>   
      <li>
        <a href="https://careers.fajservices.ae/" onClick={(e) => { 
          e.preventDefault(); 
          setMobileToggle(false);
          window.open("https://careers.fajservices.ae/", "_blank");
        }}>
          Careers
        </a>
      </li>
      <li>
        <a href="/blogs/" onClick={(e) => { e.preventDefault(); handleNavigation('/blogs/'); }}>
          Blogs
        </a>
      </li>
      <li className="menu-item-has-children" onMouseEnter={handleDropdownHover}>
        <a onClick={() => setMobileToggle(false)}>
          About Us
        </a>
        <DropDown>
          <ul>
            <li>
              <a href="/about-us/" onClick={(e) => { e.preventDefault(); handleNavigation('/about-us/'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="/our-portfolio/" onClick={(e) => { e.preventDefault(); handleNavigation('/our-portfolio/'); }}>
                Our Portfolio
              </a>
            </li>
          </ul>
        </DropDown>
      </li>        
      <li>
        <a href="/contact-us/" onClick={(e) => { e.preventDefault(); handleNavigation('/contact-us/'); }}>
          Contact Us
        </a>
      </li>
    </ul>
  );
}