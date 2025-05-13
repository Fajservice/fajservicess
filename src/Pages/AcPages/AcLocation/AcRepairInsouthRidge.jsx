import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInsouthRidgeDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInsouthRidgeDetail';
const AcRepairInsouthRidge = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in South Ridge"
    ></BreadCumb>
    <AcRepairInsouthRidgeDetail />
</div>
  )
}

export default AcRepairInsouthRidge
