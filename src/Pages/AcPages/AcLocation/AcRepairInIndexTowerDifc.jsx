import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInIndexTowerDifcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInIndexTowerDifcDetail';
const AcRepairInIndexTowerDifc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Index Tower DIFC"
    ></BreadCumb>
    <AcRepairInIndexTowerDifcDetail />
</div>
  )
}

export default AcRepairInIndexTowerDifc
