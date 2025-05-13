import BreadCumb from "../Components/Common/BreadCumb";
import KitchenEquipmentsAMCDetail from "../Components/ServiceDetails/KitchenEquipDetails/KitchenEquipmentsAMCDetail";

const KitchenEquipmentsAMC = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/annual-maintenance-contract-(AMC).avif"

                Title="Kitchen Equipments Annual Maintenance Contract"
            ></BreadCumb> 

            <KitchenEquipmentsAMCDetail /> 
        </div>
    );
};

export default KitchenEquipmentsAMC;