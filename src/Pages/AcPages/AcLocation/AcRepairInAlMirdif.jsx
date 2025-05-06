import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMirdifDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMirdifDetail';
const AcRepairInAlMirdif = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Al Mirdif"
    ></BreadCumb>
    <AcRepairInAlMirdifDetail />
</div>
  )
}

export default AcRepairInAlMirdif
