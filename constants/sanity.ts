export const sanityURL = 'https://2vssg6r2.api.sanity.io/'

export const sanityVersionURL = 'vX/data/query/production'

export const GreenfulAPIURL = sanityURL + sanityVersionURL

export const getCalendarItemsQuery = `*[_type == 'calendar']`

export const getHomepageSelectionsQuery = `*[_type == 'homepage']{"imageUrl": callToAction.image.asset->url, callToAction, buttons, _createdAt} | order(_createdAt asc)`

export const getCategoryQuery = `*[_type == 'category']`

export const getFood = `*[_type == 'category']`
export const getDrink = `*[_type == 'category']`

export const getEventsQuery = `*[_type == 'events']{"imageUrl": mainImage.asset->url, title, slug, body, _createdAt} | order(_createdAt desc)`
export const getEventQuery = (slug = '')=> `*%5B_type+%3D%3D+%27events%27+%26%26+slug.current+%3D%3D+%22${slug}%22%5D{"imageUrl": mainImage.asset->url, title, slug, body, _createdAt}`