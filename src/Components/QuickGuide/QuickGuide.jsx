import React from 'react'

const QuickGuide = () => {
    return (
        <section className="section cs_py_48 bg-light-gray">
            <div className="container">
                <h3 className="cs_fs_30">A Quick Guide to Understanding and Fixing Your AC Problems</h3>
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
                        <p>Watch this video to learn about the common issues your air conditioning unit may experience.
                            This knowledge will help you ensure that the professionals you hire are performing the appropriate checks and maintenance.</p>
                        <p><strong>We specialize in:</strong></p>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>AC coil cleaning</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Recharging refrigerant levels</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Cleaning or replacing the air filtes</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Checking and tightening electrical connections</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Regular maintenance</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Unclogging drain lines</span>
                                    </li>
                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Inspecting and AC installation
                                        </span>
                                    </li>

                                    <li>
                                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                            <i className="bi bi-check"></i></span>
                                        <span>Fixing leaks refrigerant, water, or duct leaks</span>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickGuide
