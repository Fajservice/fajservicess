import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJebelAliDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJebelAliDetail';

const AcRepairInJebelAli = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jebel Ali"
    ></BreadCumb>
    <AcRepairInJebelAliDetail />
</div>
  )
}

export default AcRepairInJebelAli
