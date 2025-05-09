import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import IndesitWashingMachineDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/IndesitWashingMachineDetail';
const IndesitWashingMachine = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="/img/banners/small-home.jpg"
        Title="Indesit Washing Machine Repair & Service"
    ></BreadCumb>

    <IndesitWashingMachineDetail />        
</div>
  )
}

export default IndesitWashingMachine
