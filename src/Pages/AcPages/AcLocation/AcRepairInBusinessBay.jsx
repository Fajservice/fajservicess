import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInBusinessBayDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInBusinessBayDetail';
const AcRepairInBusinessBay = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Business Bay"
    ></BreadCumb>
    <AcRepairInBusinessBayDetail />
</div>
  )
}

export default AcRepairInBusinessBay
