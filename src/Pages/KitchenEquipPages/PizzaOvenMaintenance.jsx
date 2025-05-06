import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import PizzaOvenMaintenanceDetail from "../../Components/ServiceDetails/KitchenEquipDetails/PizzaOvenMaintenanceDetail.jsx";

const PizzaOvenMaintenance = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                // bgImg="/img/page_heading_1.jpg"
                bgImg="/img/ac_service-bannerbg.jpg"
                Title="Pizza Oven Repair"
            ></BreadCumb> 

            <PizzaOvenMaintenanceDetail></PizzaOvenMaintenanceDetail>        
        </div>
    );
};

export default PizzaOvenMaintenance;