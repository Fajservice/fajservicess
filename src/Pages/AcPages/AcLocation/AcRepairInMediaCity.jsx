import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInMediaCityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInMediaCityDetail';
const AcRepairInMediaCity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in MediaCity"
    ></BreadCumb>
    <AcRepairInMediaCityDetail />
</div>
  )
}

export default AcRepairInMediaCity
