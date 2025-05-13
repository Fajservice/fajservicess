import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInNadAlShebaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInNadAlShebaDetail';

const AcRepairInNadAlSheba = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.avif"
        Title="AC Service in Nad Al Sheba"
    ></BreadCumb>
    <AcRepairInNadAlShebaDetail />
</div>
  )
}

export default AcRepairInNadAlSheba
