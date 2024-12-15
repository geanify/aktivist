

import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Fragment } from '../atoms/Fragment';
import {toHTML} from '@portabletext/to-html'

export const Events = (props) => {
    return <BasePage>
        <title>Greenful House</title>
        <h1>Evenimente Recente</h1>
        <div class="event-preview-container">
            {
                props?.events?.map(event=>{
                    // const text = event.body.map(({children})=>children.map(({text})=>text)).join('')
                    const text = toHTML(event.body)
                    return <div class="event-preview">
                            <div>
                                <a href={`/evenimente/${event.slug.current}`}>
                                    <img src={event.imageUrl}/>
                                </a>
                            </div>
                            
                            <div class="event-preview-text">
                                <a href={`/evenimente/${event.slug.current}`}>
                                    <b>{event.title}</b>
                                    {text}
                                </a>
                            </div>
                        
                        
                    </div>
                })
            }    
        </div>

    </BasePage>
}