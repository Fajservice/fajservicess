import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMankhoolDetail from './AcRepairInMankhoolDetail';
const AcRepairInMankhool = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Mankhool"
    ></BreadCumb>
    <AcRepairInMankhoolDetail />
</div>
  )
}

export default AcRepairInMankhool
