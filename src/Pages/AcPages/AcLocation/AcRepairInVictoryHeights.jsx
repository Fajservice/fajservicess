import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInVictoryHeightsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInVictoryHeightsDetail';
const AcRepairInVictoryHeights = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Victory Heights"
    ></BreadCumb>
    <AcRepairInVictoryHeightsDetail />
</div>
  )
}

export default AcRepairInVictoryHeights
