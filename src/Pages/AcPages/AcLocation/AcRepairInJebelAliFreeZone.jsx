import React from 'react'
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJebelAliFreeZoneDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJebelAliFreeZoneDetail';
const AcRepairInJebelAliFreeZone = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="img/page_heading_1.avif"
                bgImg="img/air-condition.jpg"
                Title="AC Service in Jebel Ali Free Zone"
            ></BreadCumb>
            <AcRepairInJebelAliFreeZoneDetail />

        </div>
    )
}

export default AcRepairInJebelAliFreeZone
