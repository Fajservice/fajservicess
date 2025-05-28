import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInKnowledgeVillageDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInKnowledgeVillageDetail';
const AcRepairInKnowledgeVillage = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Knowledge Village"
    ></BreadCumb>
    <AcRepairInKnowledgeVillageDetail />
</div>
  )
}

export default AcRepairInKnowledgeVillage
