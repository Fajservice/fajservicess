import BreadCumb from "../../Components/Common/BreadCumb";
import IntegratedApplianceRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/IntegratedApplianceRepairDetail";

const IntegratedApplianceRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/built-in-appliances-repair-service-faj.avif"
                mobileBgImg="img/banners/built-in-appliances-repair-service-faj-mobile.avif"
                Title="Built-in Appliances Repair Service Dubai"
            ></BreadCumb>
            <IntegratedApplianceRepairDetail></IntegratedApplianceRepairDetail>

        </div>
    );
};

export default IntegratedApplianceRepair;