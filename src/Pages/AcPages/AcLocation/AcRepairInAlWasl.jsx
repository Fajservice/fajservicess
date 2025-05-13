import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWaslDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWaslDetail';
const AcRepairInAlWasl = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Wasl"
    ></BreadCumb>
    <AcRepairInAlWaslDetail />
</div>
  )
}

export default AcRepairInAlWasl
