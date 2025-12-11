
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInRemraamDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInRemraamDetail';
const AcRepairInRemraam = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Remraan"
    ></BreadCumb>
    <AcRepairInRemraamDetail />
</div>
  )
}

export default AcRepairInRemraam