import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDifcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDifcDetail';
const AcRepairInDifc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in DIFC"
    ></BreadCumb>
    <AcRepairInDifcDetail />
</div>
  )
}

export default AcRepairInDifc
