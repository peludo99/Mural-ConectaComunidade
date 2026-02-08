
import './Navbar.css';
import NavItem, { type NavItemInterface } from '../NavItem/NavItem';

function Navbar() {

    const intems: NavItemInterface[] = [

        { url: '/', label: 'Inicio' },
        { url: '/sobre', label: 'Sobre' },
      
    
    ]

    return (


        <header>

            <nav className="navbar">

               
               
                <a href="/">
                    <img className='Logo' src="/src/assets/mural.png" alt="Logo da Comunidade Mural"  /> 
                </a>

                 <p className='title'>Alto Nossa Senhora de Fátima</p>

                <ul className="nav-items">
                    {intems.map((item, index) => (
                        <NavItem key={index} url={item.url} label={item.label} />
                    ))}
                </ul>

            </nav>

        </header>

    )

}

export default Navbar
