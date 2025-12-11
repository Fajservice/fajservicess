
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlkaramaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlkaramaDetail';
const AcRepairInAlkarama = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Karama"
      ></BreadCumb>
      <AcRepairInAlkaramaDetail />
    </div>
  )
}

export default AcRepairInAlkarama
