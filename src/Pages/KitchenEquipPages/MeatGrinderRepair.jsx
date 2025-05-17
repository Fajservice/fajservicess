import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import MeatGrinderRepairDetail from "../../Components/ServiceDetails/KitchenEquipDetails/MeatGrinderRepairDetail.jsx";
const MeatGrinderRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments-banners/meat-grinder.avif"
                Title="Meat Grinder Repair"
            ></BreadCumb>

            <MeatGrinderRepairDetail></MeatGrinderRepairDetail>
        </div>
    );
};

export default MeatGrinderRepair;