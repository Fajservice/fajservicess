import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInAlTawarDetail from '../Components/ServiceDetails/AcRepairInAlTawarDetail';
const AcRepairinAlTawar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        // bgImg="/img/page_heading_1.jpg"
        bgImg="/img/air-condition.jpg"
        Title="AC Service and Repair in Al Tawar"
    ></BreadCumb>
    <AcRepairInAlTawarDetail />
</div>
  )
}

export default AcRepairinAlTawar
