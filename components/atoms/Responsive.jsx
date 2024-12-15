
import * as elements from 'typed-html';

export const MobileOnly = (props) => {
    return <div class='mobile-only'>
        {props.children}
    </div>
}

export const DesktopOnly = (props) => {
    return <div class='desktop-only'>
        {props.children}
    </div>
}