import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DoughMixerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DoughMixerRepairDetail.jsx";

const DoughMixerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Meat Grinder Repair"
            ></BreadCumb> 

            <DoughMixerRepairDetail></DoughMixerRepairDetail>        
        </div>
    );
};

export default DoughMixerRepair;