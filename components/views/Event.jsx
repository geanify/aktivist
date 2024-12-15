

import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Fragment } from '../atoms/Fragment';
import {toHTML} from '@portabletext/to-html'
import { BackgroundImage } from '../atoms/BackgroundImage';
import { SectionText } from '../atoms/SectionText';

export const Event = (props) => {
    const {event} = props;
    const text = toHTML(event.body)
    return <BasePage>
        <title>Greenful House - {event.title}</title>
        <div class="event-container">
            <BackgroundImage src={event.imageUrl}>
                <SectionText>
                    <h1 class="TextShadow">{event.title}</h1>
                </SectionText>
            </BackgroundImage>
            <div class='event-text'>
                {text}
            </div>
            
        </div>

    </BasePage>
}