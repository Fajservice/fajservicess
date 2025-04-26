import React from 'react'
import BreadCumb from "../../Components/Common/BreadCumb";
import AcRepairInGardensDetails from '../../Components/ServiceDetails/AcRepairInGardensDetails';

const AcRepairInGardens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Limestone House DIFC"
    ></BreadCumb>
    <AcRepairInGardensDetails />
</div>
  )
}

export default AcRepairInGardens
