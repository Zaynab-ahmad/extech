import HomeNavBar from './HomeNavbar/HomeNavBar'
import AboutNavBar from './AboutNavBar/AboutNavBar';

const NavBarController = ({ type }) => {
    return (
        type === 1 ? <HomeNavBar/> :
        type === 2 ? <AboutNavBar/> :
        type === 3 ? <AboutNavBar/> :
        null // 
    );
};

export default NavBarController;

