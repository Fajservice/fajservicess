import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PrivacyPolicyPage = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Refund Policy");
    const metadescription = String(description || "Refund Policy, FAJ was established 2010 & expert in appliances maintenance service company in Dubai, Offering repair of fridge, washing machine.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/img/page_heading_1.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/refund-policy/").replace(/\/?$/, '/');

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{metatitle}</title>
                    <meta name="description" content={metadescription} />
                    <meta name="keywords" content={metaKeyword} />
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />

                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content={metatitle} />
                    <meta property="og:description" content={metadescription} />
                    <meta property="og:url" content={metaURL} />
                    <meta property="og:image" content={metaImage} />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metatitle} />
                    <meta name="twitter:description" content={metadescription} />
                    <meta name="twitter:image" content={metaImage} />
                    <meta name="twitter:url" content={metaURL} />
                </Helmet>
            </HelmetProvider>
            <section className="section cs_py_30">
                <div className="container">
                    <h1 className="cs_fs_30 text-center mb-0">Refund Policy</h1>
                </div>
            </section>

            <section className="cs_section_padding pt-1 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 cs_fs_9">
                            <p className="my-2">We are pleased to offer you our technical services and would like to outline our pre-payment terms and conditions. These terms are designed to protect both parties and ensure that we can continue to deliver high-quality technical services.</p>
                            <p><strong>Pre-payment Requirement:</strong></p>
                            <p className="my-2">Customers are required to make an advance pre-payment of the total service cost before any services can be rendered</p>
                            <p><strong>Inspection / Call-Out Fee Pre-payment Requirement:</strong></p>
                            <p className="my-2">For relevant inspections/call-outs, we require pre-payment in full before they are rendered. This means that you will need to pay in full before we schedule the appointment.</p>
                            <p><strong>Payment Method:</strong></p>
                            <p className="my-2">Pre-payments can be made using electronic payment platforms, cash, or any other approved method specified by the service provider.</p>
                            <p><strong>Payment Method:</strong></p>
                            <p className="my-2">Pre-payments can be made using electronic payment platforms, cash, or any other approved method specified by the service provider.</p>
                            <p><strong>Prepayment Deadline:</strong></p>
                            <p className="my-2">The pre-payment must be completed no later than the same day or the next day during working hours, before the scheduled service date, to allow sufficient preparation time</p>
                            <p><strong>Application of Prepayment:</strong></p>
                            <p className="my-2">The pre-payment amount will be applied to the total cost of any service. Any remaining balance will be due upon completion, and payment can be made according to the service provider's standard payment terms.</p>
                            <p><strong>Non-Transferability:</strong></p>
                            <p className="my-2">Pre-payments are non-transferable and cannot be assigned or used by any other individual or entity other than the customer who made the payment.</p>
                            <p><strong>Changes to Service:</strong></p>
                            <p className="my-2">Any changes requested by the customer after the pre-payment has been made may be subject to review by the service provider. Adjustments to the pre-payment amount may be required based on the nature and extent of the requested changes.</p>
                            <p><strong>Terms and Conditions Acceptance:</strong></p>
                            <p className="my-2">By making the pre-payment, the customer acknowledges and accepts these pre-payment terms and conditions in their entirety.</p>
                            <p className="my-2">We believe these pre-payment terms and conditions are fair and reasonable for both parties. If you have any questions or concerns about these terms, please feel free to reach out at +97143300002.</p>
                             <h3 className="cs_fs_12 my-2">Rescheduling and Cancellations</h3>
                            <ul className="mb-3">
                            <li>You can cancel or change your booking request by contacting us at least one working day in advance to avoid cancellation charges. If you do not provide adequate notice, charges will apply according to the company&rsquo;s policy. Please ensure that your notification is in written format and sent to info@fajservices.ae. FAJ Technical Services LLC reserves the right to impose cancellation fees to cover any related administrative expenses.</li>
                            <li>A cancellation fee will apply if amendments or cancellations are made less than 24 hours before the scheduled start time of the job.</li>
                            <li>Please note that the booking cannot be cancelled or amended during or after the provision of cleaning services.</li>
                            <li>FAJ Technical Services LLC has the right to cancel or reschedule a service if unforeseen circumstances affect the assigned team.</li>
                            <li>Requests to reschedule or cancel (limited to one time per booking) made with less than 48 hours' notice but more than 24 hours' notice can be accommodated without additional cost.</li>
                            <li>If you provide less than 24 hours' notice, a charge of AED 157 will be incurred.</li>
                            </ul>
                             <h3 className="cs_fs_12 my-2">Payments</h3>
                            <ul className="mb-3">
                            <li>To enable online payments using credit or debit cards, we reserve the exclusive right to verify and authorise the card prior to your purchase.</li>
                            <li>When making an online payment, please ensure that you keep a copy of the transaction record for your records</li>
                            <li>By booking a service on our website, you agree that your payment details will be shared with our payment service provider for processing.</li>
                            <li>You also agree to automatic invoicing and payment for the services booked on the website, when applicable.</li>
                            <li>Please note that once payment is made for the services rendered, it is non-refundable. If you encounter any issues or exceptional circumstances, please contact us at +97143300002 or email us at info@fajservices.ae.</li>
                            </ul>
                             <h3 className="cs_fs_12 my-2">Service and VAT fees</h3>
                            <p className="my-2">All service bookings are subject to a service fee and a 5% Value Added Tax (VAT) in accordance with UAE regulations.</p>
                             <h3 className="cs_fs_12 my-2">Refunds/Claims/Complaints</h3>
                            <p><strong>Satisfaction Guarantee:</strong></p>
                            <p className="my-2">All services are deemed complete and satisfactory unless <strong>FAJ Technical Services LLC </strong>receives written notice within 24 hours of service completion.</p>
                            <p><strong>Complaint Resolution:</strong></p>
                            <p className="my-2">All complaints about service quality will be investigated, and the company will make reasonable efforts to resolve any issues to the client's satisfaction.</p>
                            <p><strong>Liability Limitation:</strong></p>
                            <p className="my-2"><strong>FAJ Technical Services LLC</strong> limits its liability for damages, losses, or issues related to its services to the cost of the service provided. Under no circumstances will the liability exceed the total amount paid for the service.</p>
                            <p><strong>Third-Party Insurance Coverage:</strong></p>
                            <p className="my-2">Where applicable, third-party insurance may provide additional coverage for damages that exceed the internal liability limit of <strong>FAJ Technical Services LLC</strong>. In the event of accidental damage or negligence by company personnel, FAJ Technical Services LLC will assist with the claims process with the insurance provider to cover any additional damages, subject to the terms and conditions of the insurance policy. However, any claim for damages through third-party insurance must be approved by the insurance company and is subject to their limits. FAJ Technical Services LLC does not guarantee full approval of any claims made under this coverage.</p>
                            <p><strong>Special Service Requirements:</strong></p>
                            <p className="my-2">The client must inform the company of any special requests or requirements before the service begins.</p>
                            <ul className="mb-3">
                            <li><strong>Damages from Negligence:</strong></li>
                            </ul>
                            <p className="my-2">If damages or issues arise due to negligence by <strong>FAJ Technical Services LLC</strong> or its staff, we will cover damages up to a maximum of 100% of the job price. If the damages exceed this amount, third-party insurance (where applicable) may provide additional coverage as specified in the insurance policy. The total liability, including any insurance coverage, will not exceed either the job price or the insurance limit, whichever is higher. However, we cannot guarantee the full approval of any claims under this coverage.</p>
                            <ul className="mb-3">
                            <li><strong>Client-Provided Information:</strong></li>
                            </ul>
                            <p className="my-2">The company will not be responsible for any damages resulting from inaccurate or incomplete information provided by the client.</p>
                            <ul className="mb-3">
                            <li><strong>Damage or Missing Items:</strong></li>
                            </ul>
                            <p className="my-2">Claims for property damage or missing items must be reported to the company within 24 hours of the service's completion. Any missing items should be communicated before the staff leaves or within 4 hours after the service is completed. After this timeframe, the company will not accept responsibility for these claims.</p>
                            <ul className="mb-3">
                            <li><strong>Service Completion Confirmation:</strong></li>
                            </ul>
                            <p className="my-2">The client or their representative must sign a service delivery receipt or invoice after each service is completed. If the client refuses to sign, they will assume full responsibility for any potential issues or risks that may arise from not signing the document.</p>
                            <ul className="mb-3">
                            <li><strong>Satisfactory Service Disputes:</strong></li>
                            </ul>
                            <p className="my-2">If a customer feels that the service was unsatisfactory, they must notify the company within 24 hours by emailing <strong>info@fajservices.ae.</strong></p>
                            <ul className="mb-3">
                            <li><strong>Refund Policy:</strong></li>
                            </ul>
                            <p className="my-2">Approved refunds will be processed to the original payment method within 15 business days. Please note that this timeframe may vary based on the processing time of your bank or credit card provider. If your account has been closed, please notify us before the refund is confirmed to arrange an alternative method for receiving your refund</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PrivacyPolicyPage;