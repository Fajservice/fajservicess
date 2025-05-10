import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlMamzarDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlMamzarDetail';
const AcRepairInAlMamzar = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/air-condition.jpg"
        Title="AC Service in Al Mamzar"
    ></BreadCumb>
    <AcRepairInAlMamzarDetail />
</div>
  )
}

export default AcRepairInAlMamzar
