import Info from '../Info/Info';
import Nav from '../Nav/Nav';
import './Header.css';


const Header = () => {
    return (
        <div className="head-container">
            <Nav/>
            <hr></hr>
            <Info/>
        </div>
    )
};

export default Header;