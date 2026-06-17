
import { Link } from "react-router-dom";
import WhatsappIconButton from '../Buttons/WhatsappIconButton';
import CallNowButton from '../Buttons/CallNowButton';

const AcAppointmentCol = () => {
  return (
    <>
      <div className="appointment-col mt-3">
        <div id="get-quote" className="mt-3">
          <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <WhatsappIconButton />
            <CallNowButton />
          </div>
        </div>
      </div>
    </>

  )
}

export default AcAppointmentCol;
