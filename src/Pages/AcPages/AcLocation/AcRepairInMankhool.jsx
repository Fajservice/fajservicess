import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMankhoolDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMankhoolDetail';
const AcRepairInMankhool = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Mankhool"
    ></BreadCumb>
    <AcRepairInMankhoolDetail />
</div>
  )
}

export default AcRepairInMankhool
