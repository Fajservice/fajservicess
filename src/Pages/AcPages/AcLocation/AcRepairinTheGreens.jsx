import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheGreensDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheGreensDetail';
const AcRepairinTheGreens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in The Greens"
    ></BreadCumb>
    <AcRepairinTheGreensDetail />
</div>
  )
}

export default AcRepairinTheGreens
