
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJvtDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJvtDetail';
const AcRepairInJvt = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in JVT"
    ></BreadCumb>
    <AcRepairInJvtDetail />
</div>
  )
}

export default AcRepairInJvt
