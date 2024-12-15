import * as elements from 'typed-html';
import { Logo } from '../Logo';
import { SocialMedia } from '../molecules/SocialMedia';
import { DesktopOnly } from '../atoms/Responsive';
import { NavBarItems } from '../molecules/NavBarItems';


export const NavBar = ({}) => {
    return (
        <div class="NavBarContainer">
            <div class="NavBar">
                <Logo/>
                <DesktopOnly>
                    <NavBarItems/>
                    <SocialMedia/>
                </DesktopOnly>
            </div>      
        </div>

    )
}