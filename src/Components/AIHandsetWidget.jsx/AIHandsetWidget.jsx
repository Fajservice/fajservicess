import { useEffect } from 'react';
import './AIHandsetWidget.css'; // Custom styles will be in this file
import aiicon from '../../../public/img/icons/aiicon.png'
const AIHandsetWidget = () => {
    useEffect(() => {
        const popup = document.getElementById('ai-popup');
        const icon = document.getElementById('ai-icon');

        const interval = setInterval(() => {
            popup?.classList.add('floatUp');
            popup?.classList.remove('d-none');
            icon?.classList.add('blinking-icon');

            setTimeout(() => {
                popup?.classList.add('d-none');
                popup?.classList.remove('floatUp');
                icon?.classList.remove('blinking-icon');
            }, 5000);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        window.open('https://smartfaj.vercel.app/', '_blank');
    };

    return (
        <>
            <div
                id="ai-handset-widget"
                className="position-fixed bottom-0 end-0 mb-2 d-flex flex-column align-items-end"
                style={{ zIndex: 9999, cursor: 'pointer' }}
            >
                <div
                    id="ai-popup"
                    className="bg-help text-white px-3 py-2 rounded-pill mb-2 shadow d-none small"
                >
                    Need Help? Let’s Talk!
                </div>

                <div
                    onClick={handleClick}
                    className="rounded-circle d-flex align-items-center justify-content-center shadow"
                    style={{
                        width: '45px',
                        height: '45px',
                        // backgroundColor: '#050A1E',
                        transition: 'all 0.3s',
                        position: 'relative',
                        right: '10px'
                    }}
                >
                    <div style={{ position: 'relative', width: '50px', height: '45px'}}>
                        <img
                            id="ai-icon"
                            src={aiicon}
                            alt="AI"
                            style={{
                                width: '100%',
                                height: '100%',
                                // filter: 'brightness(4) invert(1)',
                            }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                color: 'white',
                                // textShadow: '0 1px 3px rgba(231, 226, 226, 0.4)',
                                pointerEvents: 'none',
                            }}
                        >
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIHandsetWidget;
