
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInAlWahaCommunityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInAlWahaCommunityDetail'

const AcRepairInAlWahaCommunity = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="img/banners/ac-banner-desktop-faj.avif"
        mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Al Waha Community"
      ></BreadCumb>
      <AcRepairInAlWahaCommunityDetail />
    </div>
  )
}

export default AcRepairInAlWahaCommunity
