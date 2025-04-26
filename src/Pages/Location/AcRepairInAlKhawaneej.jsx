import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInAlKhawaneejDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlKhawaneejDetail';
const AcRepairInAlKhawaneej = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Khawaneej"
    ></BreadCumb>
    <AcRepairInAlKhawaneejDetail />
</div>
  )
}

export default AcRepairInAlKhawaneej
