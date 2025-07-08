import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is installed via npm

const Chatbox = () => {
    useEffect(() => {
        // Inject Font Awesome and Google Fonts
        const loadLink = (href) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        };

        loadLink('https://fonts.googleapis.com/css?family=Lato');
        loadLink('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

        const chatbox = $.noConflict();

        // Use delegated events to ensure it works after React renders
        chatbox(document).on('click', '.faj-chatbox-toggle', () => {
            const popup = chatbox('.faj-chatbox-popup');
            popup.is(':visible') ? popup.fadeOut() : popup.fadeIn();
        });

        chatbox(document).on('click', '.faj-chatbox-maximize', () => {
            chatbox('.faj-chatbox-popup, .faj-chatbox-toggle').fadeOut();
            chatbox('.faj-chatbox-panel').fadeIn().css({ display: 'flex' });
        });

        chatbox(document).on('click', '.faj-chatbox-minimize', () => {
            chatbox('.faj-chatbox-panel').fadeOut();
            chatbox('.faj-chatbox-popup, .faj-chatbox-toggle').fadeIn();
        });

        chatbox(document).on('click', '.faj-chatbox-panel-close', () => {
            chatbox('.faj-chatbox-panel').fadeOut();
            chatbox('.faj-chatbox-toggle').fadeIn();
        });

        // Clean up on unmount
        return () => {
            chatbox(document).off('click', '.faj-chatbox-toggle');
            chatbox(document).off('click', '.faj-chatbox-maximize');
            chatbox(document).off('click', '.faj-chatbox-minimize');
            chatbox(document).off('click', '.faj-chatbox-panel-close');
        };
    }, []);

    return (
        <>
            {/* Toggle Button */}
            <button className="faj-chatbox-toggle m-0 me-2 mb-1 " style={{ fontFamily: 'Lato, sans-serif' }}>
                <i className="fa fa-comment" aria-hidden="true"></i>
            </button>

            {/* Popup View */}
            <section className="faj-chatbox-popup" style={{ display: 'none', fontFamily: 'Lato, sans-serif' }}>
                <header className="faj-chatbox-popup__header">
                    <aside style={{ flex: 3 }}>
                        <img src={`${import.meta.env.BASE_URL}img/fajlogo.png`} className="faj-chatbox-logo" alt="FAJ" />

                    </aside>
                    <aside style={{ flex: 8 }}>
                        <span className="ms-2 text-uppercase fw-bold">Smart Assistant</span>
                    </aside>
                    <aside style={{ flex: 1 }}>
                        <span className="faj-chatbox-maximize">
                            <i className="fa fa-window-maximize" aria-hidden="true"></i>
                        </span>
                    </aside>
                </header>
                <main className="faj-chatbox-popup__main">
                    We make it simple and seamless for<br /> business and people to talk to each<br /> other. Ask us anything.
                </main>
                <footer className="faj-chatbox-popup__footer">
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </aside>
                    <aside style={{ flex: 10 }}>
                        <textarea placeholder="Type your message here..." autoFocus></textarea>
                    </aside>
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </aside>
                </footer>
            </section>

            {/* Full Panel View */}
            <section className="faj-chatbox-panel" style={{ display: 'none', fontFamily: 'Lato, sans-serif' }}>
                <header className="faj-chatbox-panel__header">
                    <aside style={{ flex: 3 }}>
                        <img src={`${import.meta.env.BASE_URL}img/fajlogo.png`} className="faj-chatbox-logo" alt="FAJ" />
                    </aside>
                    <aside style={{ flex: 6 }}>
                        <span className="ms-2 text-uppercase fw-bold">Smart Assistant</span>
                    </aside>
                    <aside style={{ flex: 3, textAlign: 'right' }}>
                        <span className="faj-chatbox-minimize pe-2">
                            <i className="fa fa-window-restore" aria-hidden="true"></i>
                        </span>
                        <span className="faj-chatbox-panel-close">
                            <i className="fa fa-close" aria-hidden="true"></i>
                        </span>
                    </aside>
                </header>
                <main className="faj-chatbox-panel__main">
                    We make it simple and seamless for<br /> business and people to talk to each<br /> other. Ask us anything.
                </main>
                <footer className="faj-chatbox-panel__footer">
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </aside>
                    <aside style={{ flex: 10 }}>
                        <textarea placeholder="Type your message here..." autoFocus></textarea>
                    </aside>
                    <aside style={{ flex: 1, color: '#888', textAlign: 'center' }}>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </aside>
                </footer>
            </section>
        </>
    );
};

export default Chatbox;
