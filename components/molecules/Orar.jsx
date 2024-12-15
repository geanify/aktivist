
import * as elements from 'typed-html';
import { Map } from '../atoms/Map';
import { Fragment } from '../atoms/Fragment';

export const Orar = (props) => {
    return <Fragment>
        <div class='ContactContainer'>
        <div class="Orar">
            <h1>Program</h1>
            <div>Luni-Duminica 12.00-23.00</div>

            <h1>Adresa</h1>
            <a href='https://maps.google.com/?q=Greenful+House'>
                <a href='https://maps.apple.com/maps?q=Greenful+House'>
                    
                    <button class="OpenMap"><i class="fa-solid fa-map-location"></i>Matei Voievod 27, Bucharest, Romania 021451</button>
                </a>
            </a>


            <h1>Rezervari</h1>
            
            <a href='tel:+40771314352'>
                <button class="OpenMap">
                    <i class="fa-solid fa-phone-flip"></i>
                    +40771314352
                </button>
            </a>  
            
        </div>
            <Map />
        </div>
    </Fragment>
}