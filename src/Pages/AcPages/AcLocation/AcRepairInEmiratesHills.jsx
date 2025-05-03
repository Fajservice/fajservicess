import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInEmiratesHillsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInEmiratesHillsDetail';
const AcRepairInEmiratesHills = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Emirates Hills"
    ></BreadCumb>
    <AcRepairInEmiratesHillsDetail />
</div>
  )
}

export default AcRepairInEmiratesHills
