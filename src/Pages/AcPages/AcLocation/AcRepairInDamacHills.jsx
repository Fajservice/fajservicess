import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDamacHillsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDamacHillsDetail';
const AcRepairInDamacHills = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Damac Hill"
    ></BreadCumb>
    <AcRepairInDamacHillsDetail />
</div>
  )
}

export default AcRepairInDamacHills
