import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahIslandsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahIslandsDetail';
const AcRepairInJumeirahIslands = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Jumeirah Islands"
    ></BreadCumb>
    <AcRepairInJumeirahIslandsDetail />
</div>
  )
}

export default AcRepairInJumeirahIslands
