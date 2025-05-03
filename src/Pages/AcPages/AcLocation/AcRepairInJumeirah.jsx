import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahDetail';
const AcRepairInJumeirah = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Jumeirah"
    ></BreadCumb>
    <AcRepairInJumeirahDetail />
</div>
  )
}

export default AcRepairInJumeirah
