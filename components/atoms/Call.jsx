import * as elements from 'typed-html';

export const Call = (props) => {
    return <a href='tel:+40771314352'>
        <i class="fa-solid fa-phone-flip"></i>
        {props.children}
    </a>
}

export const CallExpanded = (props) => {
    return <a href='tel:+40771314352'>
    <button class="OpenMap">
        <i class="fa-solid fa-phone-flip"></i>
        +40771314352
    </button>
</a>  
}