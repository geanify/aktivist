import * as elements from 'typed-html';
import { CategorieProdus } from '../molecules/CategorieProdus';
import { CategoriiProduse } from '../../constants/MockProductDB';
import { BackToTop } from '../atoms/BackToTop';
import { QuickScrollBautura, QuickScrollMancare } from '../molecules/QuickScrollBautura';

export const Bautura = (props) => {
    const food = props.menu.filter(({type})=>!type)
    const drink = props.menu.filter(({type})=>type)
    console.log(drink)
    return <div>
        <QuickScrollBautura drink={drink}/>
        <QuickScrollMancare food={food}/>
        
        <div class='slide-in-left' id="food">
        {
            food.map(categorie=>{
                return <CategorieProdus {...categorie}/>
            })
        }
        </div>
        <div class='display-none' id="drink">
        {
            drink.map(categorie=>{
                return <CategorieProdus {...categorie}/>
            })
        }
        </div>
        <BackToTop/>
    </div>
}