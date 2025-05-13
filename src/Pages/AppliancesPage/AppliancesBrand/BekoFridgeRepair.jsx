import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import BekoFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/BekoFridgeRepairDetail';
const BekoFridgeRepair = () => {
  return (
     <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Beko Fridge Repair in Dubai"
    ></BreadCumb>

    <BekoFridgeRepairDetail />     
</div>
  )
}

export default BekoFridgeRepair
