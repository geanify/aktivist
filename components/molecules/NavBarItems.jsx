import * as elements from 'typed-html';
import { Fragment } from '../atoms/Fragment';

export const NavBarItems = ({}) => {
    return (
        <Fragment>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                <a href="/meniu">Meniu</a>
            </div>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                <a href="/evenimente">Evenimente</a>
            </div>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                <a href="/calendar">Calendar</a>
            </div>
            <div class='VerticalDivider'/>
            <div class='NavBarItem'>
                <a href="/contact">Contact</a>
            </div>
            <div class='VerticalDivider'/>
        </Fragment>

    )
}