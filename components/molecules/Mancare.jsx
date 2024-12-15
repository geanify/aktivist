import * as elements from 'typed-html';
import { Produs } from '../atoms/Produs';


const fakeProducts = [
    {
        nume: "test",
        pret: "test",
        vegetarian: true,
        picant: true,
        ingrediente: "pizda"
    },
    {
        nume: "test2",
        pret: "test2",
        vegetarian: false,
        picant: true,
        ingrediente: "pizda"
    },
]


export const Mancare = () => {
    return <div class='ListaMeniu'>
        {
            fakeProducts.map(produs => {
                return <Produs {...produs}/>
            })
        }
    </div>
}