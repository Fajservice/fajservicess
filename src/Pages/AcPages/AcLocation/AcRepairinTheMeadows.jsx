import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheMeadowsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheMeadowsDetail';
const AcRepairinTheMeadows = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in The Meadows"
    ></BreadCumb>
    <AcRepairinTheMeadowsDetail />
</div>
  )
}

export default AcRepairinTheMeadows
