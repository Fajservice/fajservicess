const DaiganosisCharges = ({ appliancebrand, feeRange }) => {
    return (
        <>
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY {appliancebrand.toUpperCase()} REPAIR SERVICE</h3>
            <p className="mb-2">
                <b>Terms & Conditions:</b> There is a callout fee that applies, {feeRange} depending on capacity,
                for each diagnosis. Same-day visits are available for bookings made before <b>12:00 PM</b>.
                For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.
            </p>
            <p className="pt-3 border-small-top">
                <strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
                <b>We provide 2-month repair warranty</b><br />
                and <small>3-month parts warranty</small> as standard.
            </p>
        </>
    );
};

export default DaiganosisCharges;
