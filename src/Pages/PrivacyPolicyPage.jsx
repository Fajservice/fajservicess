import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PrivacyPolicyPage = ({ titleSeo, 
    description, 
    Author, 
    Keyword, 
    URL }) => {

        const metaTitle = String(
        titleSeo || "Privacy Policy | FAJ Technical Services L.L.C Company"
    );

    const metaDescription = String(
        description || "FAJ Privacy Policy | Visit FAJ Services when you need help with building or home. We provide a wide range of maintenance services as per requirements"
    );

    const metaAuthor = String(
        Author || "FAJ Technical Services L.L.C"
    );

    const metaKeyword = String(
        Keyword || "Washing Machine in JBR, Fridge in JBR, Dishwasher in JBR, Appliance Service in JBR, Appliance Repair in JBR, Appliance Maintenance in JBR, Appliance Installation in JBR"
    );

    const metaURL = String(URL || "https://www.fajservices.ae/privacy-policy/"
    );

    const metaImage = String(
        Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/page_heading_1.avif"
    );

    return (
        <>
            <HelmetProvider>
                <Helmet>
                   <title>{metaTitle}</title>
                    <meta name="description" content={metaDescription} />
                    <meta name="keywords" content={metaKeyword} />
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:url" content={metaURL} />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:description" content={metaDescription} />
                    <meta property="og:image" content={metaImage} />
                    <meta property="og:image:alt" content="Privacy Policy" />
                    <meta property="og:site_name" content="FAJ Technical Services" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    
                    <meta name="twitter:title" content={metaTitle} />
                    <meta name="twitter:description" content={metaDescription} />
                    <meta name="twitter:image" content={metaImage} />
                    <meta name="twitter:image:alt" content="Privacy Policy" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="language" content="English" />
                </Helmet>
            </HelmetProvider>
            <section className="section cs_py_30">
                <div className="container">
                    <h1 className="cs_fs_30 text-center mb-0">Privacy Policy</h1>
                </div>
            </section>

            <section className="cs_section_padding pt-1 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 cs_fs_12">
                            <p className="my-2">We regard the protection of your privacy as a necessary principle for our community. We recognise that you and your information are among our most valuable assets. Your data is stored and processed on our servers, which are secured through both physical and technological security measures. If you do not wish for your information to be transferred or used in any way, please send your request to info@fajservices.ae or choose not to use the website. We do not sell or rent your information to any third parties without your explicit consent.</p>
                            <p className="my-2">This document outlines the fundamental principles of our privacy policy as it pertains to customer data. Any questions or comments should be directed to our management team.</p>
                            <p className="my-2">Who are we? In this policy ("Privacy Policy"), the terms "Our," "We," and "Us" refer to FAJ Technical Services L.L.C, whose registered offices are located at:</p>
                            <p className="my-2"><strong>UAE:</strong> Warehouse # S-02 - Gate 35 Street 18B - Al Qouz Ind.fourth - Al Quoz - Dubai - United Arab Emirates</p>
                            <p className="my-2">We are engaged in providing domestic, commercial, and industrial technical services in the U.A.E. This policy outlines how we collect, store, process, share, and disclose personal information about you (&ldquo;you&rdquo; and &ldquo;your&rdquo;) that is provided to us either directly or through our website at:</p>
                            <ul className="mb-3">
                            <li>www.fajservices.ae</li>
                            </ul>
                            <h3 className="cs_fs_14 my-2">Your account obligations</h3>
                            <p className="my-2">This Privacy Policy outlines how FAJ Technical Services L.L.C collects and uses your data. We encourage you to read this Privacy Policy carefully. By using the services offered by FAJ, you consent to the collection and use of your data by FAJ and certain authorised third-party service providers as described in this policy. If you do not agree with this Privacy Policy, please refrain from using the FAJ Technical Services L.L.C website. By accepting the Privacy Policy during registration, you provide explicit consent for us to use and disclose your personal information in accordance with this policy. This Privacy Policy is incorporated into the terms of the User Agreement.</p>
                            <h3 className="cs_fs_14 my-2">Your privacy protection with FAJ Technical Services L.L.C</h3>
                            <p className="my-2">FAJ Technical Services L.L.C values your trust in us. We want you to feel comfortable using our site and be secure when sharing your information with us. Therefore, we are proud of our commitment to protecting your privacy. Please continue reading this policy to understand how your personal information will be handled as you make full use of our site.</p>
                            <h3 className="cs_fs_14 my-2">Your privacy guarantee with FAJ Technical Services L.L.C</h3>
                            <p className="my-2">FAJ Technical Services L.L.C guarantees that we will not sell or rent your personal information to third parties, except as outlined in this Privacy Policy, without your consent. We and certain authorised third-party service providers will use the personal information you provide to deliver the services we offer.</p>
                            <h4 className="cs_fs_12 my-2">Third-party service providers</h4>
                            <p className="my-2">We hire other companies and individuals to perform various functions on our behalf. Examples of these functions include providing services, assisting with marketing, delivering search results, and processing credit card payments. These third parties have access to the personal information necessary to carry out their tasks but are not permitted to use that information for any other purposes.</p>
                            <p className="my-2"><strong>Information We Collect from You</strong></p>
                            <p className="my-2">FAJ Technical Services L.L.C collects information that you provide during registration, as well as insights gathered from your use of our services and visits to our website. This includes details about the transactions you make, such as the payment card information used. We may also gather additional data related to your participation in any promotions or competitions we offer, along with any feedback you provide or information you share when completing profile forms. Additionally, we monitor customer traffic patterns and site usage to enhance the services we provide. We aim to collect only the information that is necessary and relevant for delivering our services.</p>
                            <p className="my-2">The personally identifiable information we may collect includes:</p>
                            <ul className="mb-3">
                            <li>Your full name (first and last name)</li>
                            <li>Mobile phone number and contact details</li>
                            <li>Demographic information (such as your address)</li>
                            <li>Email address</li>
                            </ul>
                            <h4 className="cs_fs_12 my-2">Your information may remain stored in an archive on our servers even after the deletion or the termination of your account, credit card details</h4>
                            <p className="my-2">We do not store any credit card information in our database or on our server. It is important for you to protect your password and computer from unauthorised access. Be sure to log out when you finish using a shared computer.</p>
                            <h4 className="cs_fs_12 my-2">Our use of your information</h4>
                            <p className="my-2">We utilise your personal and contact information for the following purposes:</p>
                            <ul className="mb-3">
                            <li>To communicate with you whenever necessary</li>
                            <li>To fulfil the orders or services you requested</li>
                            <li>To maintain social history as required by current laws or policies</li>
                            <li>To reach out to you as a participant in our surveys</li>
                            <li>To inform you if you win a contest</li>
                            <li>To send you promotional materials from our contest sponsors or advertisers</li>
                            </ul>
                            <h4 className="cs_fs_12 my-2">Who&rsquo;s allowed to use FAJ Technical Services L.L.C?</h4>
                            <p className="my-2">FAJ Technical Services L.L.C does not sell services to children. If you are under 18, you may browse the FAJ Technical Services L.L.C website, but you cannot purchase any service without a parent or guardian's involvement.</p>
                            <h4 className="cs_fs_12 my-2">Information that you can access</h4>
                            <p className="my-2">FAJ Technical Services L.L.C provides access to information regarding your account and interactions with FAJ, allowing you to view, update, and edit that information.</p>
                            <h4 className="cs_fs_12 my-2">Our disclosure of your information</h4>
                            <p className="my-2">We will only use your personal information to complete transactions with you. We do not rent, sell, or share your personal information, and we will not disclose any personally identifiable information to third parties unless:</p>
                            <ul className="mb-3">
                            <li>We have your permission.</li>
                            <li>We need to provide the products or services you have requested.</li>
                            <li>We need to investigate, prevent, or take action regarding unlawful activities, suspected fraud, potential threats to safety or security, violations of FAJ Technical Services L.L.C terms of use, or to defend against legal claims.</li>
                            <li>We are required to comply with subpoenas, court orders, or requests from legal authorities or law enforcement agencies.</li>
                            <li>Your privacy and security are our top priorities.</li>
                            </ul>
                            <h4 className="cs_fs_12 my-2">Security</h4>
                            <p className="my-2">To protect against the loss, misuse, and alteration of the information we manage, we have established appropriate physical, electronic, and managerial procedures. For instance, our servers are accessible only to authorised personnel, and your information is shared with relevant team members on a need-to-know basis to complete transactions and fulfil the services you request.</p>
                            <p className="my-2">While we strive to safeguard the confidentiality of your personally identifiable information, please be aware that transmissions made over the internet cannot be completely secure. By using this site, you agree that we cannot be held liable for any disclosure of your information due to transmission errors or unauthorised actions by third parties.</p>
                            <h4 className="cs_fs_12 my-2">Access or change your personally identifiable information</h4>
                            <p className="my-2">To protect your privacy and security, we will verify your identity before granting access to or making changes to your personally identifiable information. If you have registered your profile with FAJ Technical Services L.L.C, you will need your FAJ username and password to access your profile information. We reserve the right to change or update our policies at any time, and such changes will take effect immediately upon being posted on this site.</p>
                            <p className="my-2">We are committed to safeguarding the privacy of our website visitors, and this policy explains how we handle your personal information. Our website uses cookies, and by using the site and agreeing to this policy, you consent to our use of cookies as outlined here.</p>
                            <p className="my-2">Regarding the information we collect, we may gather, store, and utilise the following types of personal information:</p>
                            <ul className="mb-3">
                            <li>Information about your computer and your visits to and use of this website, including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation.</li>
                            <li>Information related to any transactions carried out between you and us through this website, including details of any purchases you make of our goods or services (such as booking health and wellness services through FAJ Technical Services L.L.C).</li>
                            <li>Information that you provide to us when you register with us, including your name, address, and email address.</li>
                            <li>Information that you provide to us when you subscribe to our website services, email notifications, and/or newsletters, including your name and email address.</li>
                            <li>Any other information you choose to send to us.</li>
                            </ul>
                            <p className="my-2">Before you disclose personal information about another person, you must obtain that person&rsquo;s consent for both the disclosure and the processing of that information under this privacy policy.</p>
                            <p className="my-2">Please note that all credit/debit card details and personally identifiable information will NOT be stored, sold, shared, rented, or leased to any third parties.</p>
                            <h4 className="cs_fs_12 my-2">1. Cookies</h4>
                            <p className="my-2">A cookie is a file that contains an identifier&mdash;a string of letters and numbers&mdash;that is sent by a web server to a web browser and stored by the browser. Each time the browser requests a page from the server, the identifier is sent back to the server. This process allows the web server to identify and track the web browser.</p>
                            <p className="my-2">Our website uses both "session" cookies and "persistent" cookies. Session cookies are deleted from your computer when you close your browser, while persistent cookies remain stored until deleted or until they reach a specified expiration date.</p>
                            <p className="my-2">We use session cookies to:</p>
                            <ul className="mb-3">
                            <li>Keep track of your navigation on the website</li>
                            <li>Manage your bookings</li>
                            <li>Prevent fraud and enhance website security</li>
                            <li>[Other uses]</li>
                            <li>We utilise persistent cookies to:</li>
                            <li>Recognise you on future visits</li>
                            <li>Remember your preferences related to your use of our website</li>
                            </ul>
                            <p className="my-2">Additionally, we use Google Analytics to assess the use of this website. Google Analytics collects statistical and other information about website usage through cookies, which are stored on users' computers. The information generated about our website is used to create reports on its usage, and Google retains this information. You can find Google's privacy policy for more details.</p>
                            <p className="my-2">Our payment service providers may also send cookies.</p>
                            <h4 className="cs_fs_12 my-2">2. Using your personal information</h4>
                            <p className="my-2">Personal information submitted to us through this website will be used for the purposes outlined in this privacy policy or in the relevant sections of the website. We may use your personal information for the following purposes:</p>
                            <ul className="mb-3">
                            <li>Administering the website</li>
                            <li>Improving your browsing experience by personalising the website</li>
                            <li>Enabling you to use the services available on the website</li>
                            <li>Supplying our premium services purchased via the website</li>
                            <li>Sending statements and invoices to you, and collecting payments</li>
                            <li>Sending general (non-marketing) commercial communications</li>
                            <li>Sending email notifications that you have specifically requested</li>
                            <li>Sending our newsletter and other marketing communications related to our business that we believe may interest you, by post or, with your specific consent, by email or similar technology (you can inform us at any time if you no longer wish to receive these marketing communications)</li>
                            <li>Addressing inquiries and complaints made by or about you concerning the website</li>
                            <li>Keeping the website secure and preventing fraud</li>
                            <li>Verifying compliance with the terms and conditions governing the use of the website (including monitoring private messages sent through our website's private messaging service)</li>
                            <li>Other related uses</li>
                            </ul>
                            <p className="my-2">When you submit personal information for publication on our website, we will publish and use that information according to the license you grant us. We will not provide your personal information to any third parties for direct marketing purposes without your consent. All financial transactions on our website using credit or debit cards are handled through our payment service provider, Checkout. You can review their privacy policy. We will share information with Checkout only to the extent necessary for processing payments you make through our website, refunding such payments, and addressing complaints and inquiries related to payments and refunds. FAJ Technical Services L.L.C will neither store any debit/credit card details of users nor share such details with third parties.</p>
                            <h4 className="cs_fs_12 my-2">3. Disclosures</h4>
                            <p className="my-2">We may share your personal information with our employees, officers, agents, suppliers, or subcontractors as necessary to fulfil the purposes outlined in this privacy policy. Additionally, we may disclose your personal information to any member of our group of companies, which includes our subsidiaries and our ultimate holding company, along with its subsidiaries, as needed for the reasons specified in this privacy policy.</p>
                            <p className="my-2">Furthermore, we may disclose your personal information under the following circumstances:</p>
                            <ul className="mb-3">
                            <li>To comply with legal obligations;</li>
                            <li>In relation to any ongoing or potential legal proceedings;</li>
                            <li>To establish, exercise, or defend our legal rights, which may involve providing information to prevent fraud and reduce credit risk;</li>
                            <li>To any individual or entity we reasonably believe may request a court or other competent authority to obtain your personal information, provided that we reasonably think such a request is likely to be granted.</li>
                            </ul>
                            <p className="my-2">Except as described in this privacy policy, we will not share your information with third parties.</p>
                            <h4 className="cs_fs_12 my-2">4. International data transfers</h4>
                            <p className="my-2">We may collect information that can be stored, processed, and transferred between the countries where we operate to utilise it in accordance with this privacy policy. Additionally, any personal information you submit for publication on our website may be made available on the Internet and could be accessed globally. We cannot guarantee the prevention of such information from being used or misused by others.</p>
                            <p className="my-2">By providing your personal information, you explicitly agree to these transfers.</p>
                            <h4 className="cs_fs_12 my-2">5. Security of your personal information</h4>
                            <p className="my-2">We will take reasonable technical and organisational measures to prevent the loss, misuse, or alteration of your personal information. All personal information you provide will be stored on our secure servers, which are protected by passwords and firewalls.</p>
                            <p className="my-2">All electronic transactions conducted through our website will be secured with encryption technology.</p>
                            <p className="my-2">Please be aware that transmitting information over the Internet carries inherent risks, and we cannot guarantee the security of data sent online. FAJ Technical Services L.L.C takes appropriate steps to ensure data privacy and security through various hardware and software methods. However, we cannot guarantee the security of any information disclosed online.</p>
                            <h4 className="cs_fs_12 my-2">6. Policy amendments</h4>
                            <p className="my-2">We may update this privacy policy periodically by publishing a new version on our website. We recommend checking this page from time to time to ensure you are satisfied with any changes. Additionally, we may also inform you of updates to our privacy policy via email.</p>
                            <h4 className="cs_fs_12 my-2">7. Your rights</h4>
                            <p className="my-2">You can either consent to our use of your personal information for marketing purposes in advance, or we will give you the chance to opt out of its use for marketing purposes.</p>
                            <h4 className="cs_fs_12 my-2">8. Third-party websites</h4>
                            <p className="my-2">The website contains links to other sites. We are not responsible for the privacy policies or practices of these third-party websites.</p>
                            <h4 className="cs_fs_12 my-2">9. Updating information</h4>
                            <p className="my-2">Please inform us if any of your personal information needs correction or updating.</p>
                            <h4 className="cs_fs_12 my-2">10. Data Collection</h4>
                            <p className="my-2">We collect data that includes your phone number, email address, home address, latitude, and longitude. This information is provided to us when you make a booking, as we need it to contact you and find your location in order to offer our services. If you would like your data deleted, please send us an email at info@fajservices.ae to request its removal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PrivacyPolicyPage;