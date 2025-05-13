import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AegFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/AegFridgeRepairDetail';
const AegFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Aeg Fridge Repair in Dubai"
    ></BreadCumb>

    <AegFridgeRepairDetail />     
</div>
  )
}

export default AegFridgeRepair
