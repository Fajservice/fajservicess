import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlTawarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlTawarDetail';
const AcRepairinAlTawar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="img/page_heading_1.avif"
        bgImg="img/air-condition.avif"
        Title="AC Service in Al Tawar"
    ></BreadCumb>
    <AcRepairInAlTawarDetail />
</div>
  )
}

export default AcRepairinAlTawar
