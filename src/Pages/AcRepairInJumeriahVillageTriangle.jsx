import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeriahVillageTriangleDetail from '../Components/ServiceDetails/AcRepairInJumeriahVillageTriangleDetail';

const AcRepairInJumeriahVillageTriangle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Jumeirah Village Triangle"
    ></BreadCumb>
    <AcRepairInJumeriahVillageTriangleDetail/>
</div>
  )
}

export default AcRepairInJumeriahVillageTriangle
