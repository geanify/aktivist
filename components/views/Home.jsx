
import * as elements from 'typed-html';
import { BasePage } from '../BasePage';
import { Section } from '../molecules/Section';
import { Fragment } from '../atoms/Fragment';
import { LinkButton } from './../atoms/LinkButton'

export const Home = (props) => {
    return <BasePage>
        <title>Greenful House</title>
        <div class='TextShadow'>
            {props?.sections?.map(section=>{
                return <Section src={section?.imageUrl} title={section?.callToAction?.title}>
                    <Fragment>{section.callToAction.description}</Fragment>
                    {
                        section?.buttons?.map(button=><LinkButton {...button}/>).join('')
                    }
                </Section>
            }).join('')}
        </div>
    </BasePage>
}