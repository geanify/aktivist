import * as elements from 'typed-html';
import { Vali } from './animations/Vali';


export const Logo = ({}) => {
    return (
        <div>
            <a href='/' class="Logo">
                <img src="/public/greenful-logo.png" height='90px' width='auto'/>
                <Vali/>
                <link rel="stylesheet" href="public/logo.css"/>
            </a> 
        </div>

    )
}