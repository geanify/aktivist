import * as elements from 'typed-html';


export const LinkProduse = (props) => {
    return <div>
        <a href={`#${props?.title}`}>{props?.title}</a>
    </div>
}