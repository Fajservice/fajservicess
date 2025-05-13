import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDownTownDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDownTownDetail';
const AcRepairInDownTown = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Downtown"
    ></BreadCumb>
    <AcRepairInDownTownDetail />
</div>
  )
}

export default AcRepairInDownTown
