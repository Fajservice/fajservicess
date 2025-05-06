import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlQusaisDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlQusaisDetail';
const AcRepairInAlWasl = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Wasl"
    ></BreadCumb>
    <AcRepairInAlQusaisDetail />
</div>
  )
}

export default AcRepairInAlWasl
