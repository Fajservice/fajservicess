import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from '../Components/ServiceDetails/AcServiceInDubaiDetail';

const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/banners/ac-service.jpg"
                Title="Ac Service in Dubai"
            ></BreadCumb>
            <AcServiceInDubaiDetail />
        </div>
    );
};

export default AcServiceInDubai;