import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBaySquareDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBaySquareDetail';
const AcRepairInBaySquare = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Bay Square"
    ></BreadCumb>
    <AcRepairInBaySquareDetail />
</div>
  )
}

export default AcRepairInBaySquare
