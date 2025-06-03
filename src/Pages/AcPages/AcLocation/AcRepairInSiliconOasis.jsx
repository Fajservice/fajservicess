import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInSiliconOasisDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInSiliconOasisDetail';
const AcRepairInSiliconOasis = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/ac-banner-desktop-faj.avif"
                mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
                Title="AC Service in Dubai Silicon Oasis"
            ></BreadCumb>
            <AcRepairInSiliconOasisDetail></AcRepairInSiliconOasisDetail>
        </div>
    )
}

export default AcRepairInSiliconOasis
