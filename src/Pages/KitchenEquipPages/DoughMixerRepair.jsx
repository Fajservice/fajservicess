import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import DoughMixerRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/DoughMixerRepairDetail.jsx"

const DoughMixerRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="/img/banners/dishwasher.jpg"
                Title="Dishwasher Repair and Service in Dubai"
            ></BreadCumb> 

            <DoughMixerRepairDetail></DoughMixerRepairDetail>
        </div>
    ); 
};

export default DoughMixerRepair;