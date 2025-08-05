import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlBarshaSouthDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlBarshaSouthDetail';
const AcRepairInAlBarshaSouth = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Barsha South"
      ></BreadCumb>
      <AcRepairInAlBarshaSouthDetail />
    </div>
  )
}

export default AcRepairInAlBarshaSouth
