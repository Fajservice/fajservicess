import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInAlWahaCommunityDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInAlWahaCommunityDetail'

const AcRepairInAlWahaCommunity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Waha Community"
    ></BreadCumb>
    <AcRepairInAlWahaCommunityDetail />
</div>
  )
}

export default AcRepairInAlWahaCommunity
