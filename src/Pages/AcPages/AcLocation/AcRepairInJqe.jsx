import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJqeDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJqeDetail';
const AcRepairInJqe = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Remraan"
    ></BreadCumb>
    <AcRepairInJqeDetail />
</div>
  )
}

export default AcRepairInJqe
