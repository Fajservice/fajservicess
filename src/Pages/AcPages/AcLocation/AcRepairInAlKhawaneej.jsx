import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlKhawaneejDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlKhawaneejDetail';
const AcRepairInAlKhawaneej = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Khawaneej"
    ></BreadCumb>
    <AcRepairInAlKhawaneejDetail />
</div>
  )
}

export default AcRepairInAlKhawaneej
