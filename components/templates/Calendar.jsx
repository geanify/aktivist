import * as elements from 'typed-html';
import { ArrowLeft, ArrowRight } from '../atoms/Arrows';
import { CalendarCell, CalendarCellPadding } from '../molecules/CalendarCell';

const getCurrentMonth = (compMonth) => {
    const month = [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie"
    ];

    return month[compMonth];
}

function daysInThisMonth(year, month) {
    console.log(year, month)
    return new Date(year, month+1, 0).getDate();
}

function getStartDay(year, month) {
    var now = new Date();
    return new Date(year, month, 0).getDay();
}

function getBeginningDayPadding(year, month) {
    const days = getStartDay(year, month);
    return Array(days).fill(0)
}

function getEndDayPadding(year, month) {
    const days = daysInThisMonth(year, month);
    const desiredDays = (parseInt(days/7) + 1) * 7;
    return Array(desiredDays - days).fill(0)
}



export const Calendar = (props) => {
    const {year, month} = props;
    const days = daysInThisMonth(year, month);
    const calendar = Array(days).fill(0).map((_,day)=>{
        return new Date(year, month, day+2)
    });
    return <div class='Calendar'>
        <h1>{getCurrentMonth(month)}</h1> 
        <div class='Calendar'>
            {getBeginningDayPadding(year, month).map((_, index)=>{
                return <CalendarCellPadding day={index+1}/>
            })}
            {calendar.map((_, index)=>{
                return <CalendarCell day={index+1}/>
            })}

            {getEndDayPadding(year, month).map((_, index)=>{
                return <CalendarCellPadding day={index+1}/>
            })}
        </div>
    </div>
}