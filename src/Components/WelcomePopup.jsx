import { usePopup } from './PopupContext';
import './WelcomePopup.css';


const WelcomePopup = () => {
  const { showPopup, closePopup } = usePopup();

  if (!showPopup) return null;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={closePopup}>
          ×
        </button>
        
        <h2 className='bgim'>CHOOSE FAJ FOR YOUR PEACE OF MIND</h2>

        <div className="popup-body">
          <div className="popup-image">
              <img src="/img/new-and-update-png-image.png" alt="" />
          </div>
        </div>
        <div className="popup-text">
           <p style={{color: "#29A305"}}>We provide 2-month service warranty</p>
        <p style={{color: "#29A305"}}>3-month parts warranty as standard.</p>
        </div>
       
        {/* <button className="popup-button" onClick={closePopup}>
          Get Started
        </button> */}
      </div>
    </div>
  )
}

export default WelcomePopup
