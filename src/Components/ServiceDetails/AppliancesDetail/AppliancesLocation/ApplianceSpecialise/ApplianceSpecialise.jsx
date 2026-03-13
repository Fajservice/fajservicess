import { Link } from "react-router-dom"
import GetQuoteButton from "../../../../Buttons/GetQuoteButton"
import CallNowButton from "../../../../Buttons/CallNowButton"

const ApplianceSpecialise = () => {
    return (
        <div>
            {/* We are specialise in Appliances services for the following brands */}
            <section className="section cs_py_30 bg-light-gray">
                <div className="container">
                    {/* <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY APPLIANCES REPAIR SERVICE</h3>
                    <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
                    <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
                        <b>We provide 2-month repair warranty</b><br />
                        and <small>3-month parts warranty</small> as standard.</p> */}
                    <h3>We specialise in appliances services for the following brands</h3>
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/lg/">
                                    <b>LG Appliance Service</b>
                                </Link>
                                : FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked.
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/samsung/">
                                    <b>Samsung Appliance Service</b>
                                </Link>
                                : If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai.
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/electrolux/">
                                    <b>Electrolux Appliance Service</b>
                                </Link>
                                : When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.
                            </p>
                            <p className="mb-0">
                                {/* <Link to="/services/home-appliances-repair/">
                                </Link> */}
                                <b>Bosch Appliance Service</b>
                                : If you are looking for the best Bosch refrigerator repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range, Washing machine, refrigerator service provider in the area.
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/viking/">
                                    <b>Viking Appliance Service</b>
                                </Link>
                                : Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking refrigerator, range or oven repair in Dubai, rely on FAJ.
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/daewoo/">
                                    <b>Daewoo Appliance Service</b>
                                </Link>
                                : We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/siemens/">
                                    <b>Siemens Appliance Service</b>
                                </Link>
                                : Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!
                            </p>
                            <p className="mb-0">
                                <Link to="/services/home-appliances-repair/brands/teka/">
                                    <b>Teka Appliance Service</b>
                                </Link>
                                : If you&apos;re searching for the best Teka appliances repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.
                            </p>

                            <br />
                            <div className="specialize-section">
                                <p>
                                <a href="/services/home-appliances-repair/brands/aeg/">AEG</a>

                                

                                <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>

                                

                                <a href="/services/home-appliances-repair/brands/beko/">Beko</a>

                                

                                <a href="/services/home-appliances-repair/brands/blomberg/">Blomberg</a>

                                

                                <a href="/services/home-appliances-repair/brands/faber/">Faber</a>

                                

                                <a href="/services/home-appliances-repair/brands/fagor/">Fagor</a>

                                

                                <a href="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>

                                

                                <a href="/services/home-appliances-repair/brands/foster/">Foster</a>

                                

                                <a href="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>

                                

                                <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>

                                

                                <a href="/services/home-appliances-repair/brands/hoover/">Hoover</a>

                                

                                <a href="/services/home-appliances-repair/brands/indesit/">Indesit</a>

                                

                                <a href="/services/home-appliances-repair/brands/neff/">Neff</a>

                                

                                <a href="/services/home-appliances-repair/brands/smeg/">Smeg</a>

                                

                                <a href="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a>

                                

                                <a href="/services/home-appliances-repair/brands/terim/">Terim</a>

                                

                                <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>

                                

                                <a href="/services/home-appliances-repair/brands/zanussi/">Zanussi</a>

                                

                                <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a>

                                

                                <a href="/services/home-appliances-repair/brands/baumatic/">Baumatic</a>

                                

                                <a href="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a>

                                

                                <a href="/services/home-appliances-repair/brands/bompani/">Bompani</a>

                                

                                <a href="/services/home-appliances-repair/brands/boston/">Boston</a>

                                

                                <a href="/services/home-appliances-repair/brands/brandt/">Brandt</a>

                                

                                <a href="/services/home-appliances-repair/brands/gibson/">Gibson</a>

                                

                                <a href="/services/home-appliances-repair/brands/gorenje/">Gorenje</a>

                                

                                <a href="/services/home-appliances-repair/brands/hisense/">Hisense</a>

                                

                                <a href="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a>

                                

                                <a href="/services/home-appliances-repair/brands/kenmore/">Kenmore</a>

                                

                                <a href="/services/home-appliances-repair/brands/panasonic/">Panasonic</a>

                                

                                <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>

                                

                                <a href="/services/home-appliances-repair/brands/sears/">Sears</a>

                                

                                <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>

                                

                                <a href="/services/home-appliances-repair/brands/haier/">Haier</a>

                                

                                <a href="/services/home-appliances-repair/brands/elica/">Elica</a>

                                

                                <a href="/services/home-appliances-repair/brands/marvel/">Marvel</a>

                                

                                <a href="/services/home-appliances-repair/brands/miele/">Miele</a>

                                

                                <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>

                                

                                <a href="/services/home-appliances-repair/brands/toshiba/">Toshiba</a>

                                

                                <a href="/services/home-appliances-repair/brands/thermador/">Thermador</a>

                                

                                <a href="/services/home-appliances-repair/brands/sharp/">Sharp</a>

                                

                                <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>

                                

                                <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>

                                

                                <a href="/services/home-appliances-repair/brands/unimac/">Unimac</a>
                                </p>
                            </div>
                            
                        </div>

                    </div>

                    <div id="get-quote" className=" mt-3">
                        <div className="container d-flex justify-content-center align-items-center gap-3">
                            <GetQuoteButton />
                            <CallNowButton />
                        </div>
                    </div>

                </div>
            </section >
        </div >
    )
}

export default ApplianceSpecialise
