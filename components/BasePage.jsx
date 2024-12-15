//https://play2048.co/
import * as elements from 'typed-html';
import { NavBar } from './templates/NavBar';

export const BasePage = ({children}) => {
    return [
        "<!DOCTYPE html>",
        <html>
            <head>
                <meta property="og:title" content="Greenful House" />
                <meta property="og:type" content="website:game" />
                <meta property="og:url" content="https://no-clip.io/" />
                <meta property="og:image" content="https://no-clip.io/public/preview.png" />
                <meta property="og:description" content="Reproducing flash era nostalgia with new and improved technology since 2023"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="/public/home.css"/>
            </head>
            
            <body>
                <div id="home" class='Homepage' >
                    <NavBar/>
                    {children}
                </div>  
            </body>
            <footer>
                <link rel="stylesheet" as="style" href="/public/game.css" media="none" onload="if(media!='all')media='all'"/><noscript><link rel="stylesheet" href="game.css"/></noscript>
                <link rel="stylesheet" as="style"  href="/public/logo.css"/>
                <link rel="stylesheet" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous"media="none" onload="if(media!='all')media='all'"/><noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/></noscript>
                <link rel="stylesheet" as="style" href="/public/animations.css" media="none" onload="if(media!='all')media='all'"/><noscript><link rel="stylesheet" href="game.css"/></noscript>
            </footer>
        </html>
    ]
}