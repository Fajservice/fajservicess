import BreadCumb from "../Components/Common/BreadCumb";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const DubaiAcServicePriceList = () => {

        // Your toggle functions go here
        const myFunctOne = () => {
          document.getElementById("acsvs-sec01").style.display = "none";
          document.getElementById("acsvs-sec02").style.display = "block";
        };
      
        const myFunctTwo = () => {
          document.getElementById("acsvs-sec02").style.display = "none";
          document.getElementById("acsvs-sec01").style.display = "block";
        };
      
        const myFunctThree = () => {
          document.getElementById("acsvs-sec03").style.display = "none";
          document.getElementById("acsvs-sec04").style.display = "block";
        };
      
        const myFunctFour = () => {
          document.getElementById("acsvs-sec04").style.display = "none";
          document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctFive = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };


        const myFunctSix = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctSeven = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctEight = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctNine = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctTen = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };


        const myFunctEleven = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };

        const myFunctTwelve = () => {
            document.getElementById("acsvs-sec04").style.display = "none";
            document.getElementById("acsvs-sec03").style.display = "block";
        };



        

    return (
        <div>
            <div className="container-fluid">
                <div className="acsvs-dis-sec-inner mt-3">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-acsvs-dis-sec">
                                <p className="acsvs-dis-sec-inner-p text-center mb-0">Get 5% to 10% <strong>DISCOUNT</strong> on General Service of 3 to 5 AC units</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="container-fluid">
                <div class="acsvs-sec-feat-inner">
                    <div class="row gx-lg-3">
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="d-blue">
                                    <div id="acsvs-sec01" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Technical Inspection Fee <b style={{ textTransform: 'math-auto' }}>1 to 3 AC <sup><small>units</small></sup></b></p>
                                        <p className="acsvs-sec-feat-p2">Central AC - Split AC - HVAC</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>157.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-dblue" id="plus_one" style={{ display: 'block' }} onClick={myFunctOne}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec02" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">AC thermostat not working</li>
                                            <li className="faj_li">Rectification Aircon power trip</li>
                                            <li className="faj_li">Rectification Air flow problems</li>
                                            <li className="faj_li">Rectification of AC water leakage</li>
                                            <li className="faj_li">Rectification of AC displayed error</li>
                                            <li className="faj_li">Rectification Sound problems from A/C</li>
                                            <li className="faj_li">Rectification of AC not cooling/overcooling</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-dblue w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_one" onClick={myFunctTwo} className="btn btn-dblue w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="d-green">
                                    <div id="acsvs-sec03" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Cost AC Cleaning Services</p>
                                        <p className="acsvs-sec-feat-p2">Chilled Water FCU AC</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>210.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-dgreen" id="plus_two" style={{ display: 'block' }} onClick={myFunctThree}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec04" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">Check and clean the filters &amp; valve strainer.</li>
                                            <li className="faj_li">Visually check the condition of the drain pan.</li>
                                            <li className="faj_li">Rectify noise, knocks, vibrations &amp; actuator valve.</li>
                                            <li className="faj_li">Check air return grill and air supply grill for air quality.</li>
                                            <li className="faj_li">Check the functionality of actuator valves &amp; thermostat.</li>
                                            <li className="faj_li">Unusually high energy bills to check Duct Leaks, Filters and Failing parts.</li>
                                            <li className="faj_li">Check the insulations on the pipeline, if damaged will recommend replacement (Additional cost for replacement of insulation).</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-dgreen w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_two" onClick={myFunctFour} className="btn btn-dgreen w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="l-green">
                                    <div id="acsvs-sec05" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Cost Home AC / Office AC Unit Servicing</p>
                                        <p className="acsvs-sec-feat-p2">Central AC &amp; Split AC 1.5 to 3.5 Ton</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>235.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-lgreen" id="plus_three" style={{ display: 'block' }} onClick={myFunctFive}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec06" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">Cleaning of standard air filters.</li>
                                            <li className="faj_li">Check and adjust the gas level.</li>
                                            <li className="faj_li">Visually check the condition of the drain pan.</li>
                                            <li className="faj_li">Pressure wash &amp; complete service outdoor unit.</li>
                                            <li className="faj_li">Check compressor &amp; motor working performance.</li>
                                            <li className="faj_li">Check the functioning thermostat and electric components.</li>
                                            <li className="faj_li">Inspect pipe, shut off valves and valve actuator for any leaks.</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-lgreen w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_three" onClick={myFunctSix} className="btn btn-lgreen w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="d-purple">
                                    <div id="acsvs-sec07" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Cost Home AC / Office AC Unit Servicing</p>
                                        <p className="acsvs-sec-feat-p2">Central &amp; Split 4.0 to 5.0 Ton</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>365.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-dpurple" id="plus_four" style={{ display: 'block' }} onClick={myFunctSeven}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec08" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">Cleaning of standard air filters.</li>
                                            <li className="faj_li">Check and adjust the gas level.</li>
                                            <li className="faj_li">Visually check the condition of the drain pan.</li>
                                            <li className="faj_li">Pressure wash &amp; complete service outdoor unit</li>
                                            <li className="faj_li">Check compressor &amp; motor working performance.</li>
                                            <li className="faj_li">Check the functioning thermostat and electric components.</li>
                                            <li className="faj_li">Inspect pipe, shut off valves and valve actuator for any leaks.</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-dpurple w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_four" onClick={myFunctEight} className="btn btn-dpurple w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="l-blue">
                                    <div id="acsvs-sec09" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Cost Commercial AC Unit Servicing</p>
                                        <p className="acsvs-sec-feat-p2">Central AC &amp; Duct Split AC 6.0 to 10 Ton</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>489.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-lblue" id="plus_five" style={{ display: 'block' }} onClick={myFunctNine}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec010" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">Cleaning of standard air filters.</li>
                                            <li className="faj_li">Check and adjust the gas level.</li>
                                            <li className="faj_li">Visually check the condition of the drain pan.</li>
                                            <li className="faj_li">Pressure wash &amp; complete service outdoor unit.</li>
                                            <li className="faj_li">Check compressor &amp; motor working performance.</li>
                                            <li className="faj_li">Check the functioning thermostat and electric components.</li>
                                            <li className="faj_li">Inspect pipe, shut off valves and valve actuator for any leaks.</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-lblue w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_five" onClick={myFunctTen} className="btn btn-lblue w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="inner-acsvs-sec-feat">
                                <div class="avsvs-sec-feat-sub">
                                <div className="d-orange">
                                    <div id="acsvs-sec11" className="text-center mb-3" style={{ display: 'block' }}>
                                        <p className="acsvs-sec-feat-p1">Cost VRV &amp; VRF AC Unit Servicing</p>
                                        <p className="acsvs-sec-feat-p2">2.0 to 5.0 Ton</p>
                                        <p className="acsvs-sec-feat-p3">Price Starting From <strong>380.00 <sup>AED</sup></strong></p>
                                        <a className="btn btn-dorange" id="plus_six" style={{ display: 'block' }} onClick={myFunctEleven}><span>View Detail</span></a>
                                    </div>
                                    <div id="acsvs-sec12" style={{ display: 'none' }}>
                                        <ul className="dft_para_format acsvs-sec-down">
                                            <li className="faj_li">Cleaning of standard air filters.</li>
                                            <li className="faj_li">Check and adjust the gas level.</li>
                                            <li className="faj_li">Pressure wash &amp; complete service outdoor unit.</li>
                                            <li className="faj_li">Check the voltage and specific gravity and faulty connections</li>
                                            <li className="faj_li">Check compressor-associated tubing, compressor suction &amp; motor.</li>
                                            <li className="faj_li">Check the sound of the motor and component within the inverters board</li>
                                            <li className="faj_li">Check variable speed compressor, expansion valve, error, and condensing &amp; evaporator safety valves pcb and sensors.</li>
                                        </ul>
                                        <div className="pdt-24">
                                            <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" target="_blank" className="btn btn-dorange w-100 txt-18">Book Now</a>
                                        </div>
                                        <div className="mgt-18">
                                            <a id="minus_six" onClick={myFunctTwelve} className="btn btn-dorange w-100">View Less</a>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-lg-4 mb-3">
               
                <div className="row border-radius-gray p-3">
                    <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                            <h3 className="cs_fs_20">Why AC Inspection is Necessary</h3>
                    </div>
                    <div className="col-sm-8">
                        
                            <p className="acsvs-exp-one-para mb-0">Regular AC inspections diagnose potential issues early, ensuring peak performance and extending your unit's lifespan. By maintaining energy efficiency, inspections reduce energy bills and enhance overall system reliability. They also help improve indoor air quality by identifying and eliminating dust and mold, creating a healthier environment for your home or office.</p>
                        
                    </div>
                </div>
               
            </div>

            <div className="container-fluid px-lg-4 mb-3">
               
                <div className="row border-radius-gray p-3">
                    <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                            <h3 className="cs_fs_20">Why AC Service is Important?</h3>
                    </div>
                    <div className="col-sm-8">
                        
                            <p className="acsvs-exp-one-para mb-0">
                            AC service involves thorough cleaning, checking refrigerant levels, and ensuring all components function properly. Regular servicing boosts efficiency, lowering energy bills and enhancing cooling performance. It prevents unexpected breakdowns, ensuring your comfort is never compromised. Additionally, it extends the unit’s life, making it a cost-effective investment.
                            </p>
                        
                    </div>
                </div>
               
            </div>

            <div className="container-fluid px-lg-4 mb-3">
               
                <div className="row border-radius-gray p-3">
                    <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                            <h3 className="cs_fs_20">Why AC Repair is Required?</h3>
                    </div>
                    <div className="col-sm-8">
                        
                            <p className="acsvs-exp-one-para mb-0">AC repair focuses on fixing specific issues like faulty wiring, refrigerant leaks, or broken parts. Air conditioner repairs restore your unit’s functionality, prevent further damage, and ensure consistent cooling. Early intervention can save you from higher repair costs or the need for a complete replacement, ensuring long-term comfort and efficiency.</p>
                        
                    </div>
                </div>
               
            </div>

            <div className="container-fluid px-lg-4 mb-3">
               
                <div className="row border-radius-gray p-3">
                    <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                            <h3 className="cs_fs_20">Why AC Maintenance is Important?</h3>
                    </div>
                    <div className="col-sm-8">
                        
                            <p className="acsvs-exp-one-para mb-0">AC maintenance includes tasks like cleaning filters, checking system controls, and inspecting coils. It ensures your unit runs efficiently, reducing energy consumption and operational costs. Regular maintenance minimizes wear and tear, preventing breakdowns and extending the system’s lifespan. Its essential approach ensures reliable, long-term performance.</p>
                        
                    </div>
                </div>
               
            </div>


            


        



           
        </div>
    );
};

export default DubaiAcServicePriceList;