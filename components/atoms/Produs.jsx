import * as elements from 'typed-html';
import { Fragment } from './Fragment';

export const Produs = (props) => {
    return <Fragment>
            <div class="Produs">
                <b class="Nume">{props.title}</b>
                {props.vegetarian && <i class="fa-solid fa-leaf Vegetarian"/>}
                {props.picant && <i class="fa-solid fa-pepper-hot Picant"></i>}
                <div class="Pret">
                    {props.price} lei
                </div>
            </div>
            {props.description && <i class="Ingrediente">{props.description}</i>}
        </Fragment>
}