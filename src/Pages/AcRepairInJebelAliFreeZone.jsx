import React from 'react'
import BreadCumb from "../Components/Common/BreadCumb";
import AcRepairInJebelAliFreeZoneDetail from '../Components/ServiceDetails/AcRepairInJebelAliFreeZoneDetail';
const AcRepairInJebelAliFreeZone = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="AC Service in Jebel Ali Free Zone Dubai"
            ></BreadCumb>
            <AcRepairInJebelAliFreeZoneDetail />

        </div>
    )
}

export default AcRepairInJebelAliFreeZone
