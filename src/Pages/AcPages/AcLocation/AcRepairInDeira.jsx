import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDeiraDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDeiraDetail';
const AcRepairInDeira = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Deira"
    ></BreadCumb>
    <AcRepairInDeiraDetail />
</div>
  )
}

export default AcRepairInDeira
