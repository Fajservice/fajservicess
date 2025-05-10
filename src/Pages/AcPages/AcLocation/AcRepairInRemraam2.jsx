import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInRemraam2Detail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInRemraam2Detail';
const AcRepairInRemraam2 = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Remraan2"
    ></BreadCumb>
    <AcRepairInRemraam2Detail />
</div>
  )
}

export default AcRepairInRemraam2
