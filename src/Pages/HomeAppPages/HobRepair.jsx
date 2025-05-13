import BreadCumb from "../../Components/Common/BreadCumb";
import HobRepairDetail from "../../Components/ServiceDetails/HomeAppDetails/HobRepairDetail"

const HobRepair = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/hob.avif"
                Title="Hob Repair Service Dubai"
            ></BreadCumb> 

            <HobRepairDetail></HobRepairDetail>
        </div>
    );
};

export default HobRepair;