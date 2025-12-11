
import BreadCumb from "../../../Components/Common/BreadCumb";
import AcRepairInTheVillaDetail from '../../../Components/ServiceDetails/AcDetail/AcLocation/AcRepairInTheVillaDetail';
const AcRepairInTheVilla = () => {
  return (
    <div className="serviceDetails">
    <BreadCumb
bgImg="img/banners/ac-banner-desktop-faj.avif"
mobileBgImg="img/banners/ac-banner-mobile-faj.avif"
        Title="AC Service in The Villa"
    ></BreadCumb>
    <AcRepairInTheVillaDetail />
    </div>
  )
}

export default AcRepairInTheVilla
