import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlaweerDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlaweerDetail';
const AcRepairInAlaweer = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Aweer"
    ></BreadCumb>
    <AcRepairInAlaweerDetail />
</div>
  )
}

export default AcRepairInAlaweer
