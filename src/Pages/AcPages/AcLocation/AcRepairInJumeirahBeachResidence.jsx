import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahBeachResidenceDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahBeachResidenceDetail';
const AcRepairInJumeirahBeachResidence = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Jumeirah Beach Residence"
    ></BreadCumb>
    <AcRepairInJumeirahBeachResidenceDetail />
</div>
  )
}

export default AcRepairInJumeirahBeachResidence
