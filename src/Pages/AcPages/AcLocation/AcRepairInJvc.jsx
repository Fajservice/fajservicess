import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJvcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJvcDetail';
const AcRepairInJvc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Jvc"
    ></BreadCumb>
    <AcRepairInJvcDetail />
</div>
  )
}

export default AcRepairInJvc
