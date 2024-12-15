
import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Map, MapButton } from '../atoms/Map';
import { CallExpanded } from '../atoms/Call';
import { Section } from '../molecules/Section';

export const Contact = (props) => {
    return <BasePage>
    <Section src="/public/terasa/day1.jpg">
              <title>Greenful House</title>
        <div class='ContactContainer'>
        <div class="Orar">
            <h1>Program</h1>
            <div>Luni-Duminica 12.00-23.00</div>

            <h1>Adresa</h1>
            <MapButton/>


            <h1>Rezervari</h1>
            
            <CallExpanded/>
            
        </div>
            <Map />
        </div>  
    </Section>

    </BasePage>
}