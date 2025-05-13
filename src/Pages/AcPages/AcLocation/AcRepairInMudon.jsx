import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMudonDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMudonDetail';
const AcRepairInMudon = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Mudon"
    ></BreadCumb>
    <AcRepairInMudonDetail />
</div>
  )
}

export default AcRepairInMudon
