import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJvtDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJvtDetail';
const AcRepairInJvt = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in JVT"
    ></BreadCumb>
    <AcRepairInJvtDetail />
</div>
  )
}

export default AcRepairInJvt
