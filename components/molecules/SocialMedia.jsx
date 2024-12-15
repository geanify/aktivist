import * as elements from 'typed-html';
import { Instagram } from '../atoms/Instagram';
import { Facebook } from '../atoms/Facebook';
import { MobileOnly } from '../atoms/Responsive';
import { Call } from '../atoms/Call';

export const SocialMedia = () => {
    return <div class='SocialMedia'>
        <Facebook/>
        <Instagram/>
        {/* <MobileOnly> */}
            <Call/>
        {/* </MobileOnly> */}
    </div>
}