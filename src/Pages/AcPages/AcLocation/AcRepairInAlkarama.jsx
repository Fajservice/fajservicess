import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlkaramaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlkaramaDetail';
const AcRepairInAlkarama = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Karama"
    ></BreadCumb>
    <AcRepairInAlkaramaDetail />
</div>
  )
}

export default AcRepairInAlkarama
