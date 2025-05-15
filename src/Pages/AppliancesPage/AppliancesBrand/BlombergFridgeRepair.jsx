import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BlombergFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BlombergFridgeRepairDetail';
const BlombergFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/homeappliancesbrands/Blomberg.avif"
        Title="Blomberg Fridge Repair"
    ></BreadCumb>

    <BlombergFridgeRepairDetail />     
</div>
  )
}

export default BlombergFridgeRepair
