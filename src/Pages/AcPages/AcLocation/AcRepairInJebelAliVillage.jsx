import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJebelAliVillageDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJebelAliVillageDetail';
const AcRepairInJebelAliVillage = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jebel Ali Village"
    ></BreadCumb>
    <AcRepairInJebelAliVillageDetail />
</div>
  )
}

export default AcRepairInJebelAliVillage
