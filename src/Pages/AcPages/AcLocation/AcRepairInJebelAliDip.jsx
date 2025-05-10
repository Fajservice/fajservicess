import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJebelAliDipDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJebelAliDipDetail';
const AcRepairInJebelAliDip = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Jebel Ali Dip"
    ></BreadCumb>
    <AcRepairInJebelAliDipDetail />
</div>
  )
}

export default AcRepairInJebelAliDip
