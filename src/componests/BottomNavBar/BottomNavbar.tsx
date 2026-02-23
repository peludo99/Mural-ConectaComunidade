
import './BottomNavBar.css';
import BottomNavItem, { type BottomNavItemInterface } from '../BottomNavItem/BottomNavItem';

function BottomNavbar() {

    const intems: BottomNavItemInterface[] = [

        { url: '/', label: 'Inicio' },
        { url: '/sobre', label: 'Sobre' },
       


    ]

    const activeUrl = window.location.pathname;

    return (


        <footer>

            <nav className="navbar">

                <ul className="nav-items">
                    {intems.map((item, index) => (
                        <BottomNavItem key={index} url={item.url} label={item.label} isActive={item.url === activeUrl} />
                    ))}
                </ul>

            </nav>

        </footer>

    )

}

export default BottomNavbar
