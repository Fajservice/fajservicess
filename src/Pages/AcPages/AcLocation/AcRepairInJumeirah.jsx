import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInJumeirahDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInJumeirahDetail';
const AcRepairInJumeirah = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in Jumeirah"
    ></BreadCumb>
    <AcRepairInJumeirahDetail />
</div>
  )
}

export default AcRepairInJumeirah
