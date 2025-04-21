import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeirahIslandsDetail from '../Components/ServiceDetails/AcRepairInJumeirahIslandsDetail';
const AcRepairInJumeirahIslands = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Jumeirah Islands"
    ></BreadCumb>
    <AcRepairInJumeirahIslandsDetail />
</div>
  )
}

export default AcRepairInJumeirahIslands
