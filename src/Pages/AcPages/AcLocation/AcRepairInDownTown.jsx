import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInOldTownDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInOldTownDetail';
const AcRepairInDownTown = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Downtown"
    ></BreadCumb>
    {/* <AcRepairInDownTown /> */}
    <AcRepairInOldTownDetail></AcRepairInOldTownDetail>
    <AcRepairInDownTown></AcRepairInDownTown>
</div>
  )
}

export default AcRepairInDownTown
