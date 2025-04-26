import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairinTheMeadowsDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairinTheMeadowsDetail';
const AcRepairinTheMeadows = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in The Meadows"
    ></BreadCumb>
    <AcRepairinTheMeadowsDetail />
</div>
  )
}

export default AcRepairinTheMeadows
