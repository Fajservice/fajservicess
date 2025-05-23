import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import PizzaOvenMaintenanceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/PizzaOvenMaintenanceDetail.jsx";

const PizzaOvenMaintenance = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/kitchen-equipments/pizza-oven.avif"
                Title="Pizza Oven Maintenance"
            ></BreadCumb> 

            <PizzaOvenMaintenanceDetail></PizzaOvenMaintenanceDetail>        
        </div>
    );
};

export default PizzaOvenMaintenance;