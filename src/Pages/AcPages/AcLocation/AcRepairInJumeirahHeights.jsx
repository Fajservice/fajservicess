import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahHeightsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahHeightsDetail';

const AcRepairInJumeirahHeights = () => {
    return (
        <div className="serviceDetails">
        <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
            Title="AC Service in Jumeirah Heights"
        ></BreadCumb>
        <AcRepairInJumeirahHeightsDetail />
    </div>
      )
}

export default AcRepairInJumeirahHeights
