import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBurDubaiDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBurDubaiDetail';
const AcRepairInBurDubai = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Bur Dubai"
    ></BreadCumb>
    <AcRepairInBurDubaiDetail />
</div>
  )
}

export default AcRepairInBurDubai
