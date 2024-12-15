
import * as elements from 'typed-html';
import { Fragment } from './Fragment';

export const Map = (props) => {
    return <iframe
            frameborder="0" style="border:0"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGK8b3VKFQH26f-Rc8Qi8U6vrELFgn0oA&q=Greenful+House"
            allowfullscreen />
      
}

export const MapButton = () => {
    return <Fragment>
            <a href='https://maps.google.com/?q=Greenful+House'>
                <a href='https://maps.apple.com/maps?q=Greenful+House'>
                    <button class="OpenMap"><i class="fa-solid fa-map-location"></i>Matei Voievod 27, Bucharest, Romania 021451</button>
                </a>
            </a>
    </Fragment>
}