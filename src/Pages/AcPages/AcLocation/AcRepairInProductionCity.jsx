import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInProductionCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInProductionCityDetail';
const AcRepairInProductionCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Production City"
    ></BreadCumb>
    <AcRepairInProductionCityDetail />
</div>
  )
}

export default AcRepairInProductionCity
