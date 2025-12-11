
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlSafaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlSafaDetail';
const AcRepairInAlSafa = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Safa"
      ></BreadCumb>
      <AcRepairInAlSafaDetail />
    </div>
  )
}

export default AcRepairInAlSafa
