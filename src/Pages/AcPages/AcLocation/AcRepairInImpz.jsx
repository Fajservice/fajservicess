
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInImpzDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInImpzDetail';
const AcRepairInImpz = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Impz"
    ></BreadCumb>
    <AcRepairInImpzDetail />
</div>
  )
}

export default AcRepairInImpz
