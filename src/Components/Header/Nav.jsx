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
          <ul className='cs_fs_16 custom_border_drop'>
            <li className="menu-item-has-children">
              <Link className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Air Conditioning Services
              </Link>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Cleaning Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      AC General Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      AC Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      AC Maintenance Contract
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
              Commercial Refrigeration
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/cold-room-repair/" onClick={() => setMobileToggle(false)}>
                    Cold Room Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/chiller-repair/" onClick={() => setMobileToggle(false)}>
                    Food Chiller Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercial-freezer-repair/" onClick={() => setMobileToggle(false)}>
                    Commercial Freezer Repair
                    </Link>
                  </li>

                  <li>
                    <Link to="/supermarket-refrigerator-repair/" onClick={() => setMobileToggle(false)}>
                    Supermarket Refrigerator Services
                    </Link>
                  </li>

                  <li>
                    <Link to="/commercial-refrigerator-repair/" onClick={() => setMobileToggle(false)}>
                    Commercial Refrigerator Repair
                    </Link>
                  </li>

                  <li>
                    <Link to="/ice-maker-repair/" onClick={() => setMobileToggle(false)}>
                    Ice Maker Repair
                    </Link>
                  </li>

                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
              Cooking and Baking / Catering Equipment’s
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/gas-cooker-repair/" onClick={() => setMobileToggle(false)}>
                    Gas Cooker Repair
                    </Link>
                  </li>

                  <li>
                    <Link to="/deep-fryer-service/" onClick={() => setMobileToggle(false)}>
                    Deep Fryer Service
                    </Link>
                  </li>

                  <li>
                    <Link to="/oven-repair/" onClick={() => setMobileToggle(false)}>
                    Oven Repair
                    </Link>
                  </li>

                  <li>
                    <Link to="/food-warmer-repair/" onClick={() => setMobileToggle(false)}>
                    Food Warmer Repair
                    </Link>
                  </li>

                  <li>
                    <Link to="/pizza-oven-maintenance/" onClick={() => setMobileToggle(false)}>
                    Pizza Oven Maintenance
                    </Link>
                  </li>

                  <li>
                    <Link to="/toaster-repair/" onClick={() => setMobileToggle(false)}>
                    Toaster Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/bain-marie-repair/" onClick={() => setMobileToggle(false)}>
                    Bain Marie Repair 
                    </Link>
                  </li>

                  <li>
                    <Link to="/hot-plate-repair/" onClick={() => setMobileToggle(false)}>
                    Hot Plate Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/shawarma-machine-repair/" onClick={() => setMobileToggle(false)}>
                    Shawarma Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/charbroiler-repair/" onClick={() => setMobileToggle(false)}>
                    Char Broilers Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/meat-grinder-repair/" onClick={() => setMobileToggle(false)}>
                    Meat Grinder Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/dough-mixer-repair/" onClick={() => setMobileToggle(false)}>
                    Dough Mixer Repair
                    </Link>
                  </li> 
                </ul>
              </DropDown>
            </li>

            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
              Commercial Laundry
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/commercial-laundry-equipment-service/" onClick={() => setMobileToggle(false)}>
                    Commercial Laundry Equipment Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercial-washing-machine-repair/" onClick={() => setMobileToggle(false)}>
                    Commercial Washing Machine Repair
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

            <li>
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Commercial Coffee Machine Services
              </a>
              
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Home Appliances Services
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      Washing Machine / Dryer Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Gas & Electrical Hob Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Gas & Electrical Oven Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Gas & Electrical Cooker Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Free Standing Appliance Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Dishwasher Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Integrated Appliance Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Vacuum Cleaner Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Small Appliances Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </DropDown>
      </li>   

      <li className="menu-item-has-children">
        <Link to="/project/" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project/" onClick={() => setMobileToggle(false)}>
              Project
              </Link>
            </li>
            <li>
              <Link to="/project/project-details/" onClick={() => setMobileToggle(false)}>
              Project Details
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>        

      <li>
        <Link to="/about-us/" onClick={() => setMobileToggle(false)}>
            About Us
          </Link>
      </li>      
    
      <li>
        <Link to="/blog/" onClick={() => setMobileToggle(false)}>
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/contact-us/" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
