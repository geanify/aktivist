import * as elements from 'typed-html';
import { Produs } from '../atoms/Produs';


export const CategorieProdus = (props) => {
    console.log(props)
    return <div class='ListaMeniu' id={props.category}>
        <h1>
            <i class={`fa-solid ${props.icon}`}></i>
            {props.category} 
        </h1>
        {
            props.products.map(produs => {
                return <Produs {...produs}/>
            })
        }
        <i class={`fa-solid ${props.icon} bg-icon`}></i>
    </div>
}