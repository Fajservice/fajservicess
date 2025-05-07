import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInRemraamDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInRemraamDetail';
const AcRepairInRemraam = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Remraan"
    ></BreadCumb>
    <AcRepairInRemraamDetail />
</div>
  )
}

export default AcRepairInRemraam
