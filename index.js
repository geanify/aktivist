import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import * as elements from 'typed-html';
import { staticPlugin } from '@elysiajs/static'
import { Home } from './components/views/Home';
import { Contact } from './components/views/Contact';
import { Meniu } from './components/views/Meniu';
import { Events } from './components/views/Events';
import { Event } from './components/views/Event';
import { CalendarView } from './components/views/CalendarView';
import {getEvents, getEvent, getHomepageSelections, getCategories} from './services/queries'

const port = 8080;

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .get('/favicon.ico', () => Bun.file('public/logo.jpg'))
    .get('/', async ({html})=> {
        const data = await getHomepageSelections()
        return html(<Home sections={data}/>)
    })
    .get('/evenimente', async ({html})=> {
        const data = await getEvents()
        return html(<Events events={data}/>)
    })
    .get('/evenimente/:slug', async ({html, params})=> {
        const data = await getEvent(params.slug)
        return html(<Event event={data[0]}/>)
    })
    .get('/contact', ({html})=> html(<Contact/>))
    .get('/meniu', async ({html, params})=> {
        const data = await getCategories()
        console.log(data)
        return html(<Meniu menu={data}/>)
    })
    .get('/calendar', ({html})=> html(<CalendarView/>))
    .get('/calendar/:year/:month', ({html, params})=> html(<CalendarView {...params}/>))

app.listen(port);

console.log(`listening on port: http://localhost:${port}`)
