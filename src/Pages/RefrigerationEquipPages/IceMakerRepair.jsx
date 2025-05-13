import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import IceMakerRepairDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/IceMakerRepairDetail.jsx";

const IceMakerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Refrigeration Equipment Services/Ice-Maker-Repair.avif"
                Title="Ice Maker Repair – Ice Machine Service "
            ></BreadCumb> 

            <IceMakerRepairDetail></IceMakerRepairDetail>
        </div>
    ); 
};

export default IceMakerRepair;