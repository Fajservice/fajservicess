import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeriahVillageTriangleDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeriahVillageTriangleDetail';

const AcRepairInJumeriahVillageTriangle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jumeirah Village Triangle"
    ></BreadCumb>
    <AcRepairInJumeriahVillageTriangleDetail/>
</div>
  )
}

export default AcRepairInJumeriahVillageTriangle
