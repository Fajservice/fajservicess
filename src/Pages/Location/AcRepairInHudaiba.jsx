import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInHudaibaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInHudaibaDetail';
const AcRepairInHudaiba = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Hudaiba"
    ></BreadCumb>
    <AcRepairInHudaibaDetail />
</div>
  )
}

export default AcRepairInHudaiba
