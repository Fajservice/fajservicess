import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInKnowledgeVillageDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInKnowledgeVillageDetail';
const AcRepairInKnowledgeVillage = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Knowledge Village"
    ></BreadCumb>
    <AcRepairInKnowledgeVillageDetail />
</div>
  )
}

export default AcRepairInKnowledgeVillage
