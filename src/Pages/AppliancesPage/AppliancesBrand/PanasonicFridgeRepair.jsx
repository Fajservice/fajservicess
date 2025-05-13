import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import PanasonicFridgeRepairDetail from '../../../Components/ServiceDetails/AppliancesDetail/AppliancesBrand/PanasonicFridgeRepairDetail';


const PanasonicFridgeRepair = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
        bgImg="img/banners/small-home.avif"
        Title="Panasonic Fridge Repair"
    ></BreadCumb>

    <PanasonicFridgeRepairDetail/>     
</div>
  )
}

export default PanasonicFridgeRepair
