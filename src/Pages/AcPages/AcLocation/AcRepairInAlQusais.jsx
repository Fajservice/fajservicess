import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlQusaisDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlQusaisDetail';
const AcRepairInAlQusais = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.jpg"
        Title="AC Repair in Al Qusais"
    ></BreadCumb>
    <AcRepairInAlQusaisDetail />
</div>
  )
}

export default AcRepairInAlQusais
