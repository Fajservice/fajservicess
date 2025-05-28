import { usePopup } from './PopupContext';
import './WelcomePopup.css';


const WelcomePopup = () => {
  const { showPopup, closePopup } = usePopup();

  if (!showPopup) return null;
  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center">
  <div className="popup-content bg-white p-4 rounded shadow position-relative" style={{ maxWidth: '500px', width: '100%' }}>
    <button className="btn-close position-absolute top-0 end-0 m-2" onClick={closePopup} aria-label="Close"></button>

    <h2 className="bg-dark-blue text-white text-center py-2 rounded-top fs-5">
      CHOOSE FAJ FOR YOUR PEACE OF MIND
    </h2>

    
    <div className="row align-items-center">
      <div className="col-4 text-center">
        <img src="/dist/img/popup.png" alt="Technician" className="img-fluid rounded" />
      </div>
      <div className="col-8">
        <h3 className="text-center text-uppercase border-bottom pb-2 mt-3 mb-4">We Provide</h3>

        <p className="mb-2 text-dark border-bottom pb-2">✅ 2-Month Service Warranty</p>
        <p className="mb-0 text-dark">✅ 3-Month Parts Warranty</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default WelcomePopup
