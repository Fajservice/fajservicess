import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import WaitForOutletReady from '../Components/WaitForOutletReady';

const Main = () => {
    return (
        <WaitForOutletReady>
            <div className='main-page-area'>
                <Header1 />
                <Outlet />
                <Footer1 />
            </div>
        </WaitForOutletReady>
    );
};

export default Main;
