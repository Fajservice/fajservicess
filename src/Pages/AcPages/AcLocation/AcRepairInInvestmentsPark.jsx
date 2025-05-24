import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInInvestmentsParkDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInInvestmentsParkDetail';
const AcRepairInInvestmentsPark = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Dubai Investments Park"
    ></BreadCumb>
    <AcRepairInInvestmentsParkDetail />
</div>
  )
}

export default AcRepairInInvestmentsPark
