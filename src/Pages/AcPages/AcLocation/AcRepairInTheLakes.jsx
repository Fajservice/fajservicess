import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheLakesDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheLakesDetail';

const AcRepairInTheLakes = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in The Lakes"
    ></BreadCumb>
    <AcRepairInTheLakesDetail />
</div>
  )
}

export default AcRepairInTheLakes
