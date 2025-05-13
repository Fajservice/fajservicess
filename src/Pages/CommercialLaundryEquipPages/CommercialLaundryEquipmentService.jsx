import BreadCumb from "../../Components/Common/BreadCumb.jsx";
import CommercialLaundryEquipmentServiceDetail from "../../Components/ServiceDetails/CommercialLaundryEquipDetails/CommercialLaundryEquipmentServiceDetail.jsx";

const CommercialLaundryEquipmentService = () => {
    return (
        <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/Commercial-Laundry-Equipment-Services/Laundry-Equipment-Service.avif"
                Title="Commercial Laundry Equipment Service"
            ></BreadCumb>

            <CommercialLaundryEquipmentServiceDetail></CommercialLaundryEquipmentServiceDetail>
        </div>
    );
};

export default CommercialLaundryEquipmentService;