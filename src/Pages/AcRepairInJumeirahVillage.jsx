import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJumeirahVillageDetail from '../Components/ServiceDetails/AcRepairInJumeirahVillageDetail';

const AcRepairInJumeirahVillage = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Jumeirah Village Dubai"
      ></BreadCumb>
      <AcRepairInJumeirahVillageDetail />

    </div>
  )
}

export default AcRepairInJumeirahVillage
