
import * as elements from 'typed-html';
import { Fragment } from './Fragment';


export const LinkButton = (props) => {
    return <Fragment>
        <a href={props.link}>
            <button class="OpenMap">
                {props?.icon && <i class={props?.icon ?? ''}></i>}
                {props.title}
            </button>
        </a>
    </Fragment>
}