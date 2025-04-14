import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/services/" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul className='cs_fs_18 custom_border_drop'>
            <li className="menu-item-has-children">
              <Link className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Air Conditioning Services
              </Link>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/ac-repair-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/ac-maintenance-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Maintenance
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Cleaning Services
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/ac-annual-maintenance-contract/" onClick={() => setMobileToggle(false)}>
                      AC Maintenance Contract
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <Link className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Coffee Machine Services
              </Link>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/coffee-machine-service-center-in-dubai/" onClick={() => setMobileToggle(false)}>
                    Coffee Machine Services
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/coffee-machine-repair/" onClick={() => setMobileToggle(false)}>
                    Commercial Coffee Machine Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Home Appliances Services
              </a>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/hob-repair-service/" onClick={() => setMobileToggle(false)}>
                      Hob Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/oven-repair-service/" onClick={() => setMobileToggle(false)}>
                      Oven Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/gas-cooker-repair-service/" onClick={() => setMobileToggle(false)}>
                      Gas Range Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/dishwasher-repair-service/" onClick={() => setMobileToggle(false)}>
                      Dishwasher Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair 
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/robot-vacuum-cleaner-repair/" onClick={() => setMobileToggle(false)}>
                      Vacuum Cleaner Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/small-home-appliances-service-center-in-dubai/" onClick={() => setMobileToggle(false)}>
                      Small Appliances Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                    Washing Machine Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/built-in-appliances-repair-service/" onClick={() => setMobileToggle(false)}>
                      Integrated Appliance Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/appliances-repair-service/" onClick={() => setMobileToggle(false)}>
                      Free Standing Appliance Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/appliances-amc-service/" onClick={() => setMobileToggle(false)}>
                    Appliances Maintenance Contract
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <Link className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Kitchen Equipment Services
              </Link>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/oven-repair/" onClick={() => setMobileToggle(false)}>
                    Oven Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/hot-plate-repair/" onClick={() => setMobileToggle(false)}>
                    Hot Plate Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/pizza-oven-maintenance/" onClick={() => setMobileToggle(false)}>
                    Pizza Oven Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/gas-cooker-repair/" onClick={() => setMobileToggle(false)}>
                      Gas Range Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/deep-fryer-service/" onClick={() => setMobileToggle(false)}>
                    Deep Fryer Service
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/meat-grinder-repair/" onClick={() => setMobileToggle(false)}>
                    Meat Grinder Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/dough-mixer-repair/" onClick={() => setMobileToggle(false)}>
                    Dough Mixer Repair
                    </Link>
                  </li> 
                  <li className='cs_light cs_fs_16'>
                    <Link to="/food-warmer-repair/" onClick={() => setMobileToggle(false)}>
                    Food Warmer Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-kitchen-equipment-amc/" onClick={() => setMobileToggle(false)}>
                    Kitchen Equipment AMC
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-cooking-appliances-repair-service/" onClick={() => setMobileToggle(false)}>
                    Kitchen Equipment Repair 
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className='menu-item-has-children'>
              <Link className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Refrigeration Equipment Services
              </Link>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/ice-maker-repair/" onClick={() => setMobileToggle(false)}>
                    Ice Maker Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-freezer-chiller-amc-service/" onClick={() => setMobileToggle(false)}>
                    Refrigeration AMC Services
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/walk-in-freezer-display-freezer-open-freezer-maintenance/" onClick={() => setMobileToggle(false)}>
                    Walk in Refrigeration Services
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/freezer-chiller-repair-service/" onClick={() => setMobileToggle(false)}>
                    Freezer & Chiller Maintenance
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-refrigeration-services/" onClick={() => setMobileToggle(false)}>
                    Commercial Refrigerator Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li>
              <Link to="/commercial-dishwasher-repair/" className='px-3' onClick={() => setMobileToggle(false)}>
                Commercial Dishwasher Services
              </Link>
            </li>

            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
              Commercial Laundry Equipment Services
              </a>
              <DropDown>
                <ul>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-washing-machine-repair/" onClick={() => setMobileToggle(false)}>
                    Washing Machine Repair
                    </Link>
                  </li>
                  <li className='cs_light cs_fs_16'>
                    <Link to="/commercial-laundry-equipment-service/" onClick={() => setMobileToggle(false)}>
                    Laundry Equipment Service
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </DropDown>
      </li>   
      <li>
        <Link to="https://careers.fajservices.ae/" onClick={() => setMobileToggle(false)}>
        Careers
        </Link>
      </li>
      <li>
        <Link to="/blogs/" onClick={() => setMobileToggle(false)}>
          Blogs
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about-us/" onClick={() => setMobileToggle(false)}>
              About Us
              </Link>
            </li>
            <li>
              <Link to="/our-portfolio/" onClick={() => setMobileToggle(false)}>
              Our Portfolio
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>        
      <li>
        <Link to="/contact-us/" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
