import * as elements from 'typed-html';
import { CategoriiProduse } from '../../constants/MockProductDB';
import { LinkProduse } from '../atoms/LinkProduse';
import { Dorian } from '../animations/Dorian';
import { Base } from '../animations/Base';
import { Bere } from '../animations/Bere';

export const QuickScrollBautura = (props) => {
    return <div class='QuickScrollProduse right display-none' id="drinkScroll">
        <div class="Animatie">
            <Bere/>
            <Base/>
        </div>
   
        <div class='QuickScrollProduseLista'>
        {
            props.drink.map(categorie=>{
                return <LinkProduse title={categorie.category}/>
            })
        }
        </div>
    </div>
}

export const QuickScrollMancare = (props) => {
    return <div class='QuickScrollProduse left' id="foodScroll">
        <div class="Animatie">
            <Dorian/>
        </div>
   
        <div class='QuickScrollProduseLista'>
        {
            props.food.map(categorie=>{
                return <LinkProduse title={categorie.category}/>
            })
        }
        </div>
    </div>
}