import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DoughMixerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DoughMixerRepairDetail.jsx";

const DoughMixerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
               bgImg="img/banners/kitchen equipments/dough-mixer.jpg"
                Title="Dough Mixer Repair"
            ></BreadCumb> 

            <DoughMixerRepairDetail></DoughMixerRepairDetail>        
        </div>
    );
};

export default DoughMixerRepair;