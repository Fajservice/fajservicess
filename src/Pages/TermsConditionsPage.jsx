import { Helmet, HelmetProvider } from "react-helmet-async";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const TermsConditionsPage = ({ 
    titleSeo, 
    description, 
    Author, 
    Keyword, 
    URL }) => {

    const metaTitle = String(
    titleSeo || "Terms and Conditions | FAJ Technical Services L.L.C Dubai"
  );

  const metaDescription = String(
    description || "By continuing to browse this website, you are agreeing to the following terms and conditions applied to the use of our services and FAJ website."
  );

  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );

  const metaKeyword = String(
    Keyword || "terms & conditions"
  );

  const metaURL = String(
    URL || "https://www.fajservices.ae/terms-and-conditions/"
  );

  const metaImage = String(
    Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/page_heading_1/public"
  );

    return (
        <>
            <Helmet>
            <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={titleSeo} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Terms & Conditions" />
          <meta property="og:site_name" content="FAJ Technical Services" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          
          <meta name="twitter:image:alt" content="Terms & Conditions" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="English" />
            </Helmet>

            <section className="cs_section_padding pt-1 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="container">
                            <h1 className="cs_fs_30 text-center mb-0 mt-4">Terms and Conditions</h1>
                        </div>
                        <div className="col-md-12 cs_fs_12">
                            <p>By continuing to browse this website, you agree to the terms and conditions that govern the use of our services and website, and you are expected to follow our company policies.&nbsp;</p>
                            <ul>
                                <li>The terms &ldquo;FAJ Technical Services L.L.C&reg;,&rdquo; &ldquo;Website,&rdquo; &ldquo;We,&rdquo; and &ldquo;Us&rdquo; in this document refer to FAJ Technical Services L.L.C.</li>
                                <li>The terms &ldquo;You,&rdquo; &ldquo;User,&rdquo; or &ldquo;Your&rdquo; refer to the individual using this website or the customer of our services.</li>
                                <li>The terms &ldquo;Document&rdquo; or &ldquo;Agreement&rdquo; in this text refer to the terms and conditions for using this website.</li>
                            </ul>
                            <h2 className="cs_fs_14 my-2">Pre-Payment Terms and Conditions</h2>
                            <p>We are pleased to offer you our technical services and would like to outline our pre-payment terms and conditions. These terms are designed to protect both parties and ensure that we can continue to deliver high-quality technical services.</p>
                            <p><strong>Pre-payment Requirement:</strong></p>
                            <p>Customers are required to make an advance pre-payment of the total service cost before any services can be rendered</p>
                            <p><strong>Inspection / Call-Out Fee Pre-payment Requirement:</strong></p>
                            <p>For relevant inspections/call-outs, we require pre-payment in full before they are rendered. This means that you will need to pay in full before we schedule the appointment.</p>
                            <p><strong>Payment Method:</strong></p>
                            <p>Pre-payments can be made using electronic payment platforms, cash, or any other approved method specified by the service provider.</p>
                            <p><strong>Prepayment Deadline:</strong></p>
                            <p>The pre-payment must be completed no later than the same day or the next day during working hours, before the scheduled service date, to allow sufficient preparation time</p>
                            <p><strong>Application of Prepayment:</strong></p>
                            <p>The pre-payment amount will be applied to the total cost of any service. Any remaining balance will be due upon completion, and payment can be made according to the service provider's standard payment terms.</p>
                            <p><strong>Non-Transferability:</strong></p>
                            <p>Pre-payments are non-transferable and cannot be assigned or used by any other individual or entity other than the customer who made the payment.</p>
                            <p><strong>Changes to Service:</strong></p>
                            <p>Any changes requested by the customer after the pre-payment has been made may be subject to review by the service provider. Adjustments to the pre-payment amount may be required based on the nature and extent of the requested changes.</p>
                            <p><strong>Terms and Conditions Acceptance:</strong></p>
                            <p>By making the pre-payment, the customer acknowledges and accepts these pre-payment terms and conditions in their entirety.</p>
                            <p>We believe these pre-payment terms and conditions are fair and reasonable for both parties. If you have any questions or concerns about these terms, please feel free to reach out at +97143300002.</p>
                            <h2 className="cs_fs_14 my-2">Rescheduling and Cancellations</h2>
                            <ul>
                                <li>You can cancel or change your booking request by contacting us at least one working day in advance to avoid cancellation charges. If you do not provide adequate notice, charges will apply according to the company&rsquo;s policy. Please ensure that your notification is in written format and sent to info@fajservices.ae. FAJ Technical Services L.L.C reserves the right to impose cancellation fees to cover any related administrative expenses.</li>
                                <li>A cancellation fee will apply if amendments or cancellations are made less than 24 hours before the scheduled start time of the job.</li>
                                <li>Please note that the booking cannot be cancelled or amended during or after the provision of cleaning services.</li>
                                <li>FAJ Technical Services L.L.C has the right to cancel or reschedule a service if unforeseen circumstances affect the assigned team.</li>
                                <li>Requests to reschedule or cancel (limited to one time per booking) made with less than 48 hours' notice but more than 24 hours' notice can be accommodated without additional cost.</li>
                                <li>If you provide less than 24 hours' notice, a charge of AED 157 will be incurred.</li>
                            </ul>
                            <h2 className="cs_fs_14 my-2">Payments</h2>
                            <ul>
                                <li>To enable online payments using credit or debit cards, we reserve the exclusive right to verify and authorise the card prior to your purchase.</li>
                                <li>When making an online payment, please ensure that you keep a copy of the transaction record for your records</li>
                                <li>By booking a service on our website, you agree that your payment details will be shared with our payment service provider for processing.</li>
                                <li>You also agree to automatic invoicing and payment for the services booked on the website, when applicable.</li>
                                <li>Please note that once payment is made for the services rendered, it is non-refundable. If you encounter any issues or exceptional circumstances, please contact us at +97143300002 or email us at info@fajservices.ae.</li>
                            </ul>
                            <h2 className="cs_fs_14 my-2">Service and VAT fees&nbsp;</h2>
                            <p>All service bookings are subject to a service fee and a 5% Value Added Tax (VAT) in accordance with UAE regulations.</p>
                            <h3 className="cs_fs_14 my-2">Refunds/Claims/Complaints&nbsp;</h3>
                            <p><strong>Satisfaction Guarantee:</strong></p>
                            <p>All services are deemed complete and satisfactory unless <strong>FAJ Technical Services L.L.C </strong>receives written notice within 24 hours of service completion.</p>
                            <p><strong>Complaint Resolution:</strong></p>
                            <p>All complaints about service quality will be investigated, and the company will make reasonable efforts to resolve any issues to the client's satisfaction.</p>
                            <p><strong>Liability Limitation:</strong></p>
                            <p><strong>FAJ Technical Services L.L.C</strong> limits its liability for damages, losses, or issues related to its services to the cost of the service provided. Under no circumstances will the liability exceed the total amount paid for the service.</p>
                            <p><strong>Third-Party Insurance Coverage:</strong></p>
                            <p>Where applicable, third-party insurance may provide additional coverage for damages that exceed the internal liability limit of <strong>FAJ Technical Services L.L.C</strong>. In the event of accidental damage or negligence by company personnel, FAJ Technical Services L.L.C will assist with the claims process with the insurance provider to cover any additional damages, subject to the terms and conditions of the insurance policy. However, any claim for damages through third-party insurance must be approved by the insurance company and is subject to their limits. FAJ Technical Services L.L.C does not guarantee full approval of any claims made under this coverage.</p>
                            <p><strong>Special Service Requirements:</strong></p>
                            <p>The client must inform the company of any special requests or requirements before the service begins.</p>
                            <p><strong>Damages from Negligence:</strong></p>
                            <p>If damages or issues arise due to negligence by <strong>FAJ Technical Services L.L.C</strong> or its staff, we will cover damages up to a maximum of 100% of the job price. If the damages exceed this amount, third-party insurance (where applicable) may provide additional coverage as specified in the insurance policy. The total liability, including any insurance coverage, will not exceed either the job price or the insurance limit, whichever is higher. However, we cannot guarantee the full approval of any claims under this coverage.</p>
                            <p><strong>Client-Provided Information:</strong></p>
                            <p>The company will not be responsible for any damages resulting from inaccurate or incomplete information provided by the client.</p>
                            <p><strong>Damage or Missing Items:</strong></p>
                            <p>Claims for property damage or missing items must be reported to the company within 24 hours of the service's completion. Any missing items should be communicated before the staff leaves or within 4 hours after the service is completed. After this timeframe, the company will not accept responsibility for these claims.</p>
                            <p><strong>Service Completion Confirmation:</strong></p>
                            <p>The client or their representative must sign a service delivery receipt or invoice after each service is completed. If the client refuses to sign, they will assume full responsibility for any potential issues or risks that may arise from not signing the document.</p>
                            <p><strong>Satisfactory Service Disputes:</strong></p>
                            <p>If a customer feels that the service was unsatisfactory, they must notify the company within 24 hours by emailing <strong>info@fajservices.ae.</strong></p>
                            <p><strong>Refund Policy:</strong></p>
                            <p>Approved refunds will be processed to the original payment method within 15 business days. Please note that this timeframe may vary based on the processing time of your bank or credit card provider. If your account has been closed, please notify us before the refund is confirmed to arrange an alternative method for receiving your refund.</p>
                            <p><strong>The use of this website or booking request is subject to, but not limited to, the following conditions:</strong></p>
                            <ul>
                                <li>Accessing this website includes all methods to browse or utilise services. This access is governed by the Terms and Conditions of use.</li>

                                <li>FAJ Technical Services L.L.C reserves the right to edit, revise, amend, or change any or all Terms and Conditions of use without prior notice to users. You are required to review this document before using the website each time you sign in or browse through it.</li>

                                <li>By using our services, you acknowledge that you agree to our terms and conditions.</li>

                                <li>You must not use this website in any way that involves hosting or transmitting computer viruses, malware, spyware, Trojans, keystroke loggers, or any other malicious software. Additionally, your use of this website must comply with the Terms and Conditions and must not be for any fraudulent, inappropriate, or unlawful purposes.</li>

                                <li>By accepting these Terms and Conditions, you confirm that your actions will not disrupt the functionality or accessibility of this website.</li>

                                <li>We may provide links to third-party websites on our site for your reference. Please note that these hyperlinks are not operated by FAJ Technical Services L.L.C and do not constitute part of our website or any agreement. FAJ Technical Services L.L.C is not responsible for the accuracy of the content on these external websites.</li>

                                <li>The website utilises cookies to track browsing preferences. When you accept cookies, your personal information is stored in specific fields. This data is preserved solely for enhancing user-friendliness and improving services on the website.</li>

                                <li>All content and materials on this website are the property of FAJ Technical Services L.L.C, and reproduction is not permitted. By using this website, you agree not to engage in any unauthorised use of the information provided.</li>

                                <li>The Terms and Conditions clearly state that you do not have any partnership or authority over FAJ Technical Services L.L.C. We want to assure you that we will not be held responsible for any difficulties we may encounter in fulfilling our obligations due to factors beyond our control. This includes, but is not limited to, electronic, mechanical, or communication failures or degradations.</li>

                                <li>All materials on this website are owned by or licensed to FAJ Technical Services L.L.C. This includes, but is not limited to, the layout, design, appearance, graphics, and other content. Reproduction of these materials is strictly prohibited, except as permitted under the copyright notice, which is part of these terms and conditions.</li>

                                <li>By using this website, you consent not to make unauthorised use of the materials and information available here.</li>

                                <li>We may also provide links to other websites for your convenience. These external links are intended to offer additional information. However, we are not responsible for the accuracy of the content on these external sites.</li>

                                <li>Your use of this website and any disputes arising from it are subject to local laws.</li>

                                <li>When you book a service through FAJ Technical Services L.L.C, we will assist you in arranging premium home services. Please note that once you request any of our home and personal wellness services, the fees you pay to our company are non-refundable, unless there is a violation caused by the company.</li>

                                <li>FAJ Technical Services has a minimum booking value policy starting from AED 170 to AED 1250 for domestic and commercial services in Dubai. This policy applies to the final booking value of single or multiple treatments.</li>

                                <li>The company may update the pricing scheme in the future. You are responsible for any applicable taxes, excluding those based on our income.</li>

                                <li>FAJ Technical Services L.L.C may adjust rates and fees periodically by posting the changes on the FAJ website. No advance notice is required for temporary promotions or for any changes that lead to a reduction in rates and fees.</li>

                                <li>FAJ Technical Services L.L.C conducts background checks on its team members both directly and through third-party services. However, we encourage each user to use common sense and caution to protect their safety and property, just as you would when interacting with any unfamiliar person.</li>

                                <li>The users agree to release FAJ Technical Services L.L.C from any liability for damages and/or missing items that may occur during or after using our home services through FAJ.</li>

                                <li>FAJ Technical Services L.L.C will process payments for your confirmed bookings using the payment method you selected on our website, such as a credit card or cash. If you choose to pay with a credit card, we may request pre-authorisation of your credit card account prior to completing your purchase.</li>

                                <li>If you choose to pay the fee using your credit card, you must keep a copy of the transaction records along with our policies and rules.</li>

                                <li>You are responsible for keeping all the information in your account confidential.</li>

                                <li>Individuals under 18 years of age are prohibited from registering or using the website.</li>

                                <li>FAJ Technical Services L.L.C is not responsible for any damage to your property that may occur while entering or exiting the house. Additionally, the FAJ Technical Services L.L.C team is not obligated to cover any damages caused during the cleaning session.</li>

                                <li>If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision will be limited to the minimum extent necessary to ensure that the remainder of the Terms and Conditions remains in full force and effect. FAJ Technical Services L.L.C may transfer, assign, or delegate these Terms and Conditions, along with its rights and obligations, without requiring consent.</li>

                                <li>FAJ Technical Services L.L.C will not engage in trade or provide services to countries sanctioned by OFAC.</li>

                                <li>FAJ Technical Services L.L.C will communicate via WhatsApp, SMS, email, or notifications for purposes including but not limited to appointment confirmations, updates, and marketing.</li>

                                <li>FAJ Technical Services L.L.C is a booking platform that provides a variety of premium technical services. These services include, but are not limited to, air conditioning services, refrigeration system maintenance, laundry appliance maintenance, large and small appliance repairs, coffee machine servicing, and other technical services. FAJ Technical Services L.L.C partners with third-party service providers who are licensed by the relevant authorities.</li>

                                <li>FAJ Technical Services L.L.C strongly advises that a customer representative be on the property during all services. Please do not leave front door keys under doormats or in unattended areas.</li>

                                <li>FAJ Technical Services L.L.C's technical team needs access to water and electricity to carry out the work, if required. Otherwise, we may not be able to proceed..</li>

                                <li>All permits, gate passes, and other necessary documentation must be arranged by the customer prior to the appointment to avoid any delays. If FAJ Technical Services L.L.C is unable to gain access to complete the service after three attempts, the assigned services will be forfeited.</li>

                                <li>Any changes or variations in specifications, work, or materials not included in this quote will be discussed, quoted, and agreed upon separately.</li>

                                <li>The contract price will be adjusted for any increased costs resulting from changes in the country's laws, including new laws, as well as the repeal or modification of existing ones.</li>

                                <li>If the client representative identifies any outstanding work before signing the work completion report, it must be addressed immediately.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default TermsConditionsPage;