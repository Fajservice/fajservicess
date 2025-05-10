import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDipDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDipDetail';
const AcRepairInDip = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.jpg"
        bgImg="img/air-condition.jpg"
        Title="AC Service in DIP"
    ></BreadCumb>
    <AcRepairInDipDetail />
</div>
  )
}

export default AcRepairInDip
