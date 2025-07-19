import React from 'react'

const QuickGuide = () => {
    return (

        <section className="section cs_py_30 bg-light-gray">
            <div className="container">
                <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS</h2>
                <div className="row">
                    <div className="col-xl-6">
                        <iframe
                            className="bordered-img blue-border"
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="col-xl-6">
                        <p className='mb-0'>We specialise in all types and brands of air conditioning systems, HVAC and FAHU.</p>
                        <p className='mb-0'><strong>Our services include:</strong></p>
                        <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">

                            <li>
                                <strong>Installation:</strong> Expert installation of various types and brands of central AC cooling systems, ensuring optimal performance and efficiency.
                            </li>

                            <li>
                                <strong>Diagnostics:</strong> Thorough fault finding to diagnose issues effectively. We provide eligibility assessments and detailed quotations to address any concerns with your system.
                            </li>

                            <li>
                                <strong>Repair Service:</strong> Efficient repair services for all air conditioner components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions!
                            </li>

                            <li>
                                <strong>Annual Maintenance Contract:</strong> This contract outlines the terms and services covered for the annual maintenance of air conditioning units. Regular maintenance is essential for optimal performance, efficiency, and longevity of your air conditioning system.
                            </li>

                        </ul>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickGuide
