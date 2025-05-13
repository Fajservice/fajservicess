import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlQuozDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlQuozDetail';
const AcRepairInAlQuoz = () => {
  return (
    <div className="serviceDetailS">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Quoz"
    ></BreadCumb>
    <AcRepairInAlQuozDetail />
</div>
  )
}

export default AcRepairInAlQuoz
