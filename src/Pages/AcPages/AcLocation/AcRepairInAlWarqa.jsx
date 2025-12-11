
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWarqaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWarqaDetail';
const AcRepairInAlWarqa = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Warqa"
      ></BreadCumb>
      <AcRepairInAlWarqaDetail />
    </div>
  )
}

export default AcRepairInAlWarqa
