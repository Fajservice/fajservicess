import BreadCumb from "../../../Components/Common/BreadCumb";
import AppliancesServiceInAlGhadeerCommunityDetail from "../../../Components/ServiceDetails/AppliancesDetail/AppliancesLocation/AppliancesServiceInAlGhadeerCommunityDetail";

const AppliancesServiceInAlGhadeerCommunity = () => {
  return (
    <div className="serviceDetails">
            <BreadCumb
                bgImg="img/banners/small-home.avif"
                Title="Home Appliance Service in Business Bay">
            </BreadCumb>
            <AppliancesServiceInAlGhadeerCommunityDetail/>
    </div>
  )
}

export default AppliancesServiceInAlGhadeerCommunity
