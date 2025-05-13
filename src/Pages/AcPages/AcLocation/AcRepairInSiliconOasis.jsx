import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInSiliconOasisDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInSiliconOasisDetail';
const AcRepairInSiliconOasis = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/ac_service-bannerbg.avif"
                Title="AC Service in Dubai Silicon Oasis"
            ></BreadCumb>
            <AcRepairInSiliconOasisDetail></AcRepairInSiliconOasisDetail>
        </div>
    )
}

export default AcRepairInSiliconOasis
