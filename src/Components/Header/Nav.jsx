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
          <ul>
            <li>
              <Link to="/ac-service-in-dubai/" onClick={() => setMobileToggle(false)}>
                AC Service
              </Link>
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
          Contact US
        </Link>
      </li>
    </ul>
  );
}
