import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheMeadowsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheMeadowsDetail';
const AcRepairinTheMeadows = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in The Meadows"
    ></BreadCumb>
    <AcRepairinTheMeadowsDetail />
</div>
  )
}

export default AcRepairinTheMeadows
