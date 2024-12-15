import * as elements from 'typed-html';
import { ArrowLeft, ArrowRight } from '../atoms/Arrows';


export const Gallery = (props) => {
    return <div class='Gallery' style={`width:${props.width};height:${props.height}`}>
        <img src="public/dorian.jpg"/>
        <img src="public/dorian.jpg"/>
        <img src="public/dorian.jpg"/>
        <ArrowLeft/>
        <ArrowRight/>
        <script src='/public/scripts/gallery.js'/>
    </div>
}