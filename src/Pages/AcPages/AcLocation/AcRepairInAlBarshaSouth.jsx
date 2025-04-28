import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarshaSouthDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarshaSouthDetail';
const AcRepairInAlBarshaSouth = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Barsha South"
    ></BreadCumb>
    <AcRepairInAlBarshaSouthDetail />
</div>
  )
}

export default AcRepairInAlBarshaSouth
