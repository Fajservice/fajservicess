import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInAlSatwaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlSatwaDetail';
const AcRepairInAlSatwa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Satwa"
    ></BreadCumb>
    <AcRepairInAlSatwaDetail />
</div>
  )
}

export default AcRepairInAlSatwa
