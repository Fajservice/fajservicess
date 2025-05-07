import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDubailandMazayaQueueDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDubailandMazayaQueueDetail';
const AcRepairInDubailandMazayaQueue = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Emirates Hills"
    ></BreadCumb>
    <AcRepairInDubailandMazayaQueueDetail />
</div>
  )
}

export default AcRepairInDubailandMazayaQueue
