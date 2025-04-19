import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeirahVillageDetail from '../Components/ServiceDetails/AcRepairInJumeirahVillageDetail'

const AcRepairInJumeriahVillageTriangle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Limestone House DIFC"
    ></BreadCumb>
    <AcRepairInJumeirahVillageDetail />
</div>
  )
}

export default AcRepairInJumeriahVillageTriangle
