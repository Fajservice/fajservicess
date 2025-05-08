import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairandServiceInEmiratesHillsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairandServiceInEmiratesHillsDetail';
const AcRepairandServiceInEmiratesHills = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Production City"
    ></BreadCumb>
    <AcRepairandServiceInEmiratesHillsDetail />
</div>
  )
}

export default AcRepairandServiceInEmiratesHills
