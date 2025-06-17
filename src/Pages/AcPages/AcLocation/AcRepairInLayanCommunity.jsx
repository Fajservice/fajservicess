import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInLayanCommunityDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInLayanCommunityDetail';
const AcRepairInLayanCommunity = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Layan Community"
    ></BreadCumb>
    <AcRepairInLayanCommunityDetail/>
</div>
  )
}

export default AcRepairInLayanCommunity
