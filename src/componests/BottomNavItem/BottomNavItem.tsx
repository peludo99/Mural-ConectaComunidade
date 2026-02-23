
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';


export interface BottomNavItemInterface {
    url: string;
    label: string;
    icon: IconDefinition;
    isActive?: boolean;
}



export default function NavItem(props: BottomNavItemInterface) {

    return (
        <>
            <li className="nav-icon">

                <FontAwesomeIcon icon={props.icon} />




                <li className="nav-item">
                    <a href={props.url} className={`nav-link ${props.isActive ? 'active' : ''}`}>
                        {props.label}

                    </a>
                </li>

            </li>
        </>
    );





}