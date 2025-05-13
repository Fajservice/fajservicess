import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheGreensDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheGreensDetail';
const AcRepairinTheGreens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in The Greens"
    ></BreadCumb>
    <AcRepairinTheGreensDetail />
</div>
  )
}

export default AcRepairinTheGreens
