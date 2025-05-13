import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import ElectroluxFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/ElectroluxFridgeRepairDetail';
const ElectroluxFridgeRepair = () => {
  return (
     <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Electrolux Refrigerator Repair Dubai and Washing Machine Service"
    ></BreadCumb>

    <ElectroluxFridgeRepairDetail />     
</div>
  )
}

export default ElectroluxFridgeRepair
