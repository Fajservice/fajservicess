import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWahaCommunityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWahaCommunityDetail'

const AcRepairInAlWahaCommunity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Waha Community"
    ></BreadCumb>
    <AcRepairInAlWahaCommunityDetail />
</div>
  )
}

export default AcRepairInAlWahaCommunity
