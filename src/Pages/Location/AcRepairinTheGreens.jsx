import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairinTheGreensDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairinTheGreensDetail';
const AcRepairinTheGreens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in The Greens"
    ></BreadCumb>
    <AcRepairinTheGreensDetail />
</div>
  )
}

export default AcRepairinTheGreens
