import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheSpringsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheSpringsDetail';
const AcRepairInTheSprings = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in The Springs"
    ></BreadCumb>
    <AcRepairInTheSpringsDetail />
</div>
  )
}

export default AcRepairInTheSprings
