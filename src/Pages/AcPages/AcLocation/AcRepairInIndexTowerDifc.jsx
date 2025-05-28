import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInIndexTowerDifcDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInIndexTowerDifcDetail';
const AcRepairInIndexTowerDifc = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Index Tower DIFC"
    ></BreadCumb>
    <AcRepairInIndexTowerDifcDetail />
</div>
  )
}

export default AcRepairInIndexTowerDifc
