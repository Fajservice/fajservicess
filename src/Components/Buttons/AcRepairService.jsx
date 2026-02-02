import React from 'react'
import { Link } from 'react-router-dom'
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';


const AcRepairService = () => {
    return (
        <div>
            <Link
                to="/services/air-conditioning-repair/ac-service/"
                className="ac-service-btn"
                aria-label="AC Repair & Services"
            >
               <img
                  className="ac-btn-content"
                  src={`${CDN}/icon/ac-repair-service/public`}
                  alt="Get A Quote"
                />
            </Link>

            <style>{`
  .ac-service-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 0px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    cursor: pointer;
    border: none;
  }
  .ac-service-btn img{
    height: 60px;
  }
  .ac-service-btn:hover {
    filter: drop-shadow(0 5px 5px rgba(14, 14, 14, 0.3));
    transform: translateY(-2px);
  }
  
  .ac-btn-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
  }
  
  .ac-btn-title {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .ac-btn-subtitle {
    font-size: 13px;
    font-weight: 400;
  }
  
  .ac-btn-icon {
    flex-shrink: 0;
  }
`}</style>
        </div>
    )
}

export default AcRepairService