import * as elements from 'typed-html';
import { CalendarEvent } from '../atoms/CalendarEvent';

export const CalendarCell = (props) => {
    return <div class="CalendarCell">
        <b>{props.day}</b>
         <CalendarEvent>Event 1</CalendarEvent>
         <CalendarEvent>Event 2</CalendarEvent>
         <CalendarEvent>Event 3</CalendarEvent>
    </div>
}

export const CalendarCellPadding = (props) => {
    return <div class="CalendarCell disabled">
    </div>
}