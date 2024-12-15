
import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Bautura } from '../templates/Bautura';
import { QuickScrollBautura, QuickScrollMancare } from '../molecules/QuickScrollBautura';
import { CursorPointer } from '../atoms/CursorPointer';
import { Section } from '../molecules/Section';

export const Meniu = (props) => {
    return <BasePage>
        <title>Greenful House</title>
            <div id="menuList" class='ListaMeniuContainer'>
            <CursorPointer>
               <h1>
                <i class="fa-solid fa-angles-left display-none" id="flip-left"></i>
                    MENIU
                <i class="fa-solid fa-angles-right" id="flip-right"></i>
                </h1> 
            </CursorPointer>
           
           <Bautura menu={props.menu}/>
        </div>

        <script src="/public/scripts/menu.js" async='true' defer='true'/>
    </BasePage>
}