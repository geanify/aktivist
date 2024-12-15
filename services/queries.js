
import { GreenfulAPIURL, getCalendarItemsQuery, getCategoryQuery, getEventsQuery, getEventQuery, getHomepageSelectionsQuery } from '../constants/sanity'

export const getCalendarItems = async () => {
    try{
        const res = await fetch(`${GreenfulAPIURL}?query=${getCalendarItemsQuery}`)
        const data = await res.json()

        return data?.result;
    } catch(e) {
        console.error(e)
    }
}

export const getHomepageSelections = async () => {
    try {
        const res = await fetch(`${GreenfulAPIURL}?query=${getHomepageSelectionsQuery}`)
        const data = await res.json()

        return data?.result;
    } catch(e) {
        console.error(e)
    }
}

export const getEvents = async () => {
    try {
        const res = await fetch(`${GreenfulAPIURL}?query=${getEventsQuery}`)
        const data = await res.json()

        return data?.result;
    } catch(e) {
        console.error(e)
    }
}

export const getEvent = async (slug) => {
    try {
        const res = await fetch(`${GreenfulAPIURL}?query=${getEventQuery(slug)}`)
        console.log(res)
        const data = await res.json()

        return data?.result;
    } catch(e) {
        console.error(e)
    }
}


export const getCategories = async () => {
    try {
        const res = await fetch(`${GreenfulAPIURL}?query=${getCategoryQuery}`)
        const data = await res.json()

        return data?.result;
    } catch(e) {
        console.error(e)
    }
}