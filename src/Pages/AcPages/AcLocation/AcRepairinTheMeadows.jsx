import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairinTheMeadowsDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairinTheMeadowsDetail';
const AcRepairinTheMeadows = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Meadows"
    ></BreadCumb>
    <AcRepairinTheMeadowsDetail />
</div>
  )
}

export default AcRepairinTheMeadows
