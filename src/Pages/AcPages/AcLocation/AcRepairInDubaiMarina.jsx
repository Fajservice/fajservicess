import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDubaiMarinaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDubaiMarinaDetail';
const AcRepairInDubaiMarina = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Dubai Marina"
    ></BreadCumb>
    <AcRepairInDubaiMarinaDetail />
</div>
  )
}

export default AcRepairInDubaiMarina
