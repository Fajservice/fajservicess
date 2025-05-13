import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlSatwaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlSatwaDetail';
const AcRepairInAlSatwa = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Satwa"
    ></BreadCumb>
    <AcRepairInAlSatwaDetail />
</div>
  )
}

export default AcRepairInAlSatwa
