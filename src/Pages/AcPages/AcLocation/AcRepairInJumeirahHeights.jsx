import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahHeightsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahHeightsDetail';

const AcRepairInJumeirahHeights = () => {
    return (
        <div className="serviceDetails">
        <BreadCumb
            // bgImg="img/page_heading_1.jpg"
            bgImg="img/air-condition.jpg"
            Title="AC Service in Jumeirah Heights"
        ></BreadCumb>
        <AcRepairInJumeirahHeightsDetail />
    </div>
      )
}

export default AcRepairInJumeirahHeights
