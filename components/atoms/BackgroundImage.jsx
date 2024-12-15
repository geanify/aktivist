import * as elements from 'typed-html';

export const BackgroundImage = (props) => {
    return <div class='Section' style={`background-image: url("${props.src}"); /*`}>
        {props.children}
    </div>
}

export const AnotherBackgroundImage = (props) => {
    return <img src={props.src} class='SectionImage'/>
}