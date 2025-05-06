import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJaeblAliIndustrialAreaDetail from '../../Components/ServiceDetails/AcDetail/Location/AcRepairInJaeblAliIndustrialAreaDetail';
const AcRepairInJaeblAliIndustrialArea = () => {
  return (
    <div className="serviceDetails">
       <BreadCumb
           bgImg="/img/air-condition.jpg"
           Title="AC Service in Limestone House DIFC"
       ></BreadCumb>
       <AcRepairInJaeblAliIndustrialAreaDetail />
   </div>
  )
}

export default AcRepairInJaeblAliIndustrialArea
