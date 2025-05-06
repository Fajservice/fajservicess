import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInsouthRidgeDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInsouthRidgeDetail';
const AcRepairInsouthRidge = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Karama"
    ></BreadCumb>
    <AcRepairInsouthRidgeDetail />
</div>
  )
}

export default AcRepairInsouthRidge
