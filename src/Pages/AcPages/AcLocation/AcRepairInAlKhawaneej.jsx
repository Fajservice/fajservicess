import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlKhawaneejDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlKhawaneejDetail';
const AcRepairInAlKhawaneej = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Khawaneej"
    ></BreadCumb>
    <AcRepairInAlKhawaneejDetail />
</div>
  )
}

export default AcRepairInAlKhawaneej
