import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlQuozDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlQuozDetail';
const AcRepairInJebelAliDip = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Jebel Ali Dip"
    ></BreadCumb>
    <AcRepairInAlQuozDetail />
</div>
  )
}

export default AcRepairInJebelAliDip
