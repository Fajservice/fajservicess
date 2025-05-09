import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcServiceInDubaiDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcServiceInDubaiDetail';

const AcServiceInDubai = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/ac-service.jpg"
                Title="Ac Service in Dubai"
            ></BreadCumb>
            <AcServiceInDubaiDetail />
        </div>
    );
};

export default AcServiceInDubai;