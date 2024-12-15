import * as elements from 'typed-html';
import { AnotherBackgroundImage, BackgroundImage } from '../atoms/BackgroundImage';
import { SectionText } from '../atoms/SectionText';

export const Section = (props) => {
    return <BackgroundImage src={props.src}>
        <SectionText>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </SectionText>
    </BackgroundImage>
}