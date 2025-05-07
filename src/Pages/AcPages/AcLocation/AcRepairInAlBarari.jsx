import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarariDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarariDetail';
const AcRepairInAlBarari = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Barari"
    ></BreadCumb>
    <AcRepairInAlBarariDetail />
</div>
  )
}

export default AcRepairInAlBarari
