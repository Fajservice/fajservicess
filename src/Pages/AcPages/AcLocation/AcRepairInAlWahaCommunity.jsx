import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWahaCommunityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWahaCommunityDetail'

const AcRepairInAlWahaCommunity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Waha Community"
    ></BreadCumb>
    <AcRepairInAlWahaCommunityDetail />
</div>
  )
}

export default AcRepairInAlWahaCommunity
