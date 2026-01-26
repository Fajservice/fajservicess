import { Link } from 'react-router-dom'

const CoffeeMachineButton = () => {
    return (
        <div>
            <Link
                to="/services/coffee-machine/coffee-machine-service-center/"
                className="ac-service-btn"
                aria-label="AC Repair & Services"
            >
                <div className="ac-btn-content">
                    <span className="ac-btn-subtitle">Coffee Machine Services</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ac-btn-icon">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </Link>

            <style>{`
  .ac-service-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: #1a3a4a;
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    cursor: pointer;
    border: none;
  }
  
  .ac-service-btn:hover {
    background-color: #142e3a;
    color: #ffffff;
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

export default CoffeeMachineButton