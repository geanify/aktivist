

import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Calendar } from '../templates/Calendar';

export const CalendarView = (props) => {
    const now = new Date();
    return <BasePage>
        <title>Greenful House</title>
        <Calendar year={props?.year ?? now.getFullYear()} month={props?.month ?? now.getMonth()}/>


        <script src="/public/scripts/menu.js" async='true' defer='true'/>
    </BasePage>
}