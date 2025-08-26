
import { Link } from "react-router-dom";
import WhatsappIconButton from '../Buttons/WhatsappIconButton';
import CallNowButton from '../Buttons/CallNowButton';

const AcAppointmentCol = () => {
  return (
    <>
      <div className="appointment-col border-small-top pt-3 mt-2">
        <p className="appointment-col mb-0">
          If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection / callout of <Link to="/ac-service-in-dubai/"><b>AC cleaning service</b></Link>, repair or maintenance. Please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.
        </p>
        <div id="get-quote" className="mt-3">
          <div className="container d-flex justify-content-center align-items-center gap-3">
            <WhatsappIconButton />
            <CallNowButton />
          </div>
        </div>
      </div>
    </>

  )
}

export default AcAppointmentCol;
