import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInLayanCommunityDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInLayanCommunityDetail';
const AcRepairInLayanCommunity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Layan Community"
    ></BreadCumb>
    <AcRepairInLayanCommunityDetail/>
</div>
  )
}

export default AcRepairInLayanCommunity
