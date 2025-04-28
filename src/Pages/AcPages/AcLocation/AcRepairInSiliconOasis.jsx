import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInSiliconOasisDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInSiliconOasisDetail';
const AcRepairInSiliconOasis = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Silicon Oasis Repair AC Service"
            ></BreadCumb>
            <AcRepairInSiliconOasisDetail></AcRepairInSiliconOasisDetail>
        </div>
    )
}

export default AcRepairInSiliconOasis
