import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInDiscoveryGardensDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInDiscoveryGardensDetail';
const AcRepairInDiscoveryGardens = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Discovery Gardens"
    ></BreadCumb>
    <AcRepairInDiscoveryGardensDetail />
</div>
  )
}

export default AcRepairInDiscoveryGardens
