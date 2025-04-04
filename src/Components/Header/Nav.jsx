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
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Air Conditioning Services
              </a>
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
                Refrigerations Services
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Servicing
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      Washing Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
              Coooking and Baking Equipement Services
              </a>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Laundry Equipment Services
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Servicing
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      Washing Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Commercial Dishwasher Services
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Servicing
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      Washing Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
            </li>
            <li className="menu-item-has-children">
              <a className='px-3 mb-0' onClick={() => setMobileToggle(false)}>
                Commercial Coffee Machine Services
              </a>
              <DropDown>
                <ul>
                  <li>
                    <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                      AC Servicing
                    </Link>
                  </li>
                  <li>
                    <Link to="/washing-machine-repair-service-dubai/" onClick={() => setMobileToggle(false)}>
                      Washing Machine Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/refrigerator-repair-service/" onClick={() => setMobileToggle(false)}>
                      Refrigerator Repair
                    </Link>
                  </li>
                </ul>
              </DropDown>
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

      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about-us/" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team/" onClick={() => setMobileToggle(false)}>
              Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details/" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>                   
          </ul>
        </DropDown>
      </li>      
    
      <li className="menu-item-has-children">
        <Link to="/blog/" onClick={() => setMobileToggle(false)}>
          News
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog/" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>          
            <li>
              <Link
                to="/blog/blog-details/"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
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
