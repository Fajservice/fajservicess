import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInAlMirdifDetail from '../Components/ServiceDetails/AcRepairInAlMirdifDetail';
const AcRepairInAlMirdif = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Mirdif"
    ></BreadCumb>
    <AcRepairInAlMirdifDetail />
</div>
  )
}

export default AcRepairInAlMirdif
