import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDiscoveryGardensDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDiscoveryGardensDetail';
const AcRepairInDiscoveryGardens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service in Discovery Gardens"
    ></BreadCumb>
    <AcRepairInDiscoveryGardensDetail />
</div>
  )
}

export default AcRepairInDiscoveryGardens
