import React from 'react'
import WhatsappIconButton from '../Buttons/WhatsappIconButton';
import CallNowButton from '../Buttons/CallNowButton';

const AppliancesAppointmentCol = () => {
    return (
        <>
            <div className="appointment-col border-small-top pt-3">
              <p className="appointment-col">
              
              If you need repairs for your coffee machine, stand mixer, or robot vacuum, please contact us.
The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                >FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your appliance at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.
              </p>
              <div id="get-quote" className="mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton/>
                  <CallNowButton/>
                </div>
              </div>
            </div>
        </>

    )
}

export default AppliancesAppointmentCol;
