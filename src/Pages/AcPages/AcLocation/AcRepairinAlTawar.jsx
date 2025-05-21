import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlTawarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlTawarDetail';
const AcRepairinAlTawar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
       
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Tawar"
    ></BreadCumb>
    <AcRepairInAlTawarDetail />
</div>
  )
}

export default AcRepairinAlTawar
