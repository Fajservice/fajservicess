import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInSufouhDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInSufouhDetail';
const AcRepairInSufouh = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Sufoush"
    ></BreadCumb>
    <AcRepairInSufouhDetail />
</div>
  )
}

export default AcRepairInSufouh
