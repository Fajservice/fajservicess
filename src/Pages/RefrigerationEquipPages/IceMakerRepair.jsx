import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import IceMakerRepairDetail from "../../Components/ServiceDetails/RefrigerationEquipDetails/IceMakerRepairDetail.jsx";

const IceMakerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <IceMakerRepairDetail></IceMakerRepairDetail>
        </div>
    ); 
};

export default IceMakerRepair;