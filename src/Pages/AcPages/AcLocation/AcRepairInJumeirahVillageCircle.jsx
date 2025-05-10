import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahVillageCircleDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahVillageCircleDetail';
const AcRepairInJumeirahVillageCircle = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.jpg"
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jumeirah Village Circle"
    ></BreadCumb>
    <AcRepairInJumeirahVillageCircleDetail />
</div>
  )
}

export default AcRepairInJumeirahVillageCircle
